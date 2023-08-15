import {
  get,
  set,
  merge,
} from 'lodash';

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from './../Utils/isEmpty';
import { status } from './../Data/actions/status';
import JsFileDownloader from 'js-file-downloader';
import { storages } from './../Data/forms/storages';
import { progress } from './../Data/actions/progress';
import { storage as formsStorage } from './../Data/forms/storage';
import { localStorage as ls } from './../Modules/LocalStorageSlim';

export function useLocalFormStorage(...args)
{
    const createFormLocalStorage = (...args) => {
        return new class LocalFormStorage
        {
            /**
             * Local form storage id.
             *
             * @var String STORAGE_ID
             */
            #STORAGE_ID = 'forms.storage';

            /**
             * Create local form strage class.
             *
             * @param string storageId
             * @return void
             */
            constructor(storageId)
            {
                if(undefined === storageId){
                    storageId = this.#STORAGE_ID;
                }

                this.#initStorage(storageId);
            }

            /**
             * Initialize local form storage.
             *
             * @return void
             */
            #initStorage(storageId)
            {
                this.#STORAGE_ID = storageId;

                if(null !==
                    this.#getStorageData()
                ){
                    return;
                }

                this.#setStorageData(storages);
            }

            /**
             * Generate form id.
             *
             * @return String
             */
            #generateFormId()
            {
                return uuidv4();
            }

            /**
             * Get local storage data.
             *
             * @return Object|null
             */
            #getStorageData()
            {
                return ls.get(
                    this.#STORAGE_ID, {decrypt: false}
                );
            }

            /**
             * Set local storage data.
             *
             * @param Object data
             * @return void
             */
            #setStorageData(data)
            {
                ls.set(
                    this.#STORAGE_ID, data, {encrypt: false}
                );
            }

            /**
             * Check weather has any active form in storage.
             *
             * @return bool
             */
            hasFormSelected()
            {
                return (null !==
                    this.#getStorageData().selected
                );
            }

            /**
             * Check weather has any active generate form in storage.
             *
             * @return bool
             */
            hasFormGenerateSelected()
            {
                return (null !==
                    this.#getStorageData().generateSelected
                );
            }

            /**
             * Get all forms in the storage.
             *
             * @return Object|null
             */
            getForms()
            {
                let storage = this.#getStorageData();
                
                return storage['storages'] ?? null;
            }

            /**
             * Get form by id from the storage.
             *
             * @param string formId
             * @return Object|null
             */
            getFormById(formId)
            {
                let storage = this.#getStorageData();
                
                return storage['storages'][formId] ?? null;
            }

            /**
             * Get selected form from the storage.
             *
             * @return Object|null
             */
            getFormSelected()
            {
                let storage = this.#getStorageData();
                
                return storage['storages'][storage.selected] ?? null;
            }

            /**
             * Select form in storage.
             *
             * @param String formId
             * @return void
             */
            selectedForm(formId)
            {
                let storage = this.#getStorageData();

                storage.selected = formId;

                this.#setStorageData(storage);
            }

            /**
             * Reset selected form in storage.
             *
             * @return void
             */
            resetSelectedForm()
            {
                let storage = this.#getStorageData();

                storage.selected = null;

                this.#setStorageData(storage);
            }

            /**
             * Get selected generate form from the storage.
             *
             * @return Object|null
             */
            getFormGenerateSelected()
            {
                let storage = this.#getStorageData();
                
                return (storage['storages'][
                    storage.generateSelected] ?? null
                );
            }

            /**
             * Select generate form in the storage.
             *
             * @param String formId
             * @return void
             */
            selectedGenerateForm(formId)
            {
                let storage = this.#getStorageData();

                storage.generateSelected = formId;

                this.#setStorageData(storage);
            }

            /**
             * Reset selected generate form in storage.
             *
             * @return void
             */
            resetSelectedGenerateForm()
            {
                let storage = this.#getStorageData();

                storage.generateSelected = null;

                this.#setStorageData(storage);
            }

            /**
             * Clear empty forms from the storage.
             *
             * @return void
             */
            clearEmptyForms()
            {
                let storage = this.#getStorageData();

                storage.storages = Object.entries(
                    storage.storages
                ).filter(([,storage]) => {
                    let settings = storage['settings'] ?? {
                        status: status.ACTIVE,
                        progress: progress.OPENED
                    };

                    return (
                        isEmpty(storage['form'] ?? null)
                        && settings['status'] === status.ACTIVE
                        && settings['progress'] === progress.OPENED
                    );
                });

                this.#setStorageData(storage);
            }

            /**
             * Create new form in storage.
             *
             * @param Object data
             * @return String
             */
            createForm(data)
            {
                let formId = this.#generateFormId();
                let storage = this.#getStorageData();

                storage.selected = formId;

                storage.storages[formId] = merge(
                    formsStorage,data,{
                        formId: formId,
                        timestamps: {
                            createdAt: moment().unix()
                        },
                        settings: {
                            name: null,
                            status: status.ACTIVE,
                            progress: progress.OPENED
                        }
                    }
                );

                this.#setStorageData(storage);

                return formId;
            }

            /**
             * Update from in storage.
             *
             * @param String formId
             * @param Object data
             * @return void
             */
            updateForm(formId, data)
            {
                let storage = this.#getStorageData();

                storage.selected = formId;

                let formProgress = get(
                    storage.storages[formId],
                    'settings.progress', progress.OPENED
                );

                storage.storages[formId] = merge(
                    storage.storages[formId],data,{
                        timestamps: {
                            updatedAt: moment().unix()
                        }
                    }
                );

                if(formProgress !== progress.CLOSED){
                    set(storage.storages[formId],
                      'settings.progress',progress.PENDING
                    );
                }

                this.#setStorageData(storage);
            }

            /**
             * Remove form from the storage.
             *
             * @param String formId
             * @return void
             */
            deleteForm(formId)
            {
                let storage = this.#getStorageData();
                
                if(formId == storage.selected){
                    storage.selected = null;
                }

                delete storage.storages[formId];

                this.#setStorageData(storage);
            }

            /**
             * Make from in storage as completed.
             *
             * @param String formId
             * @return void
             */
            completedForm(formId)
            {
                let storage = this.#getStorageData();

                storage.selected = null;

                storage.storages[formId] = merge(
                    storage.storages[formId],{
                        timestamps: {
                            completedAt: moment().unix()
                        },
                        settings:{
                            status: status.INACTIVE,
                            progress: progress.CLOSED
                        }
                    }
                );

                this.#setStorageData(storage);
            }

            /**
             * Import file data as form in the storage.
             *
             * @param Object form
             * @param callback success
             * @param callback failure
             * @return void
             */
            importForm(form,success = () => {},failure = () => {})
            {
                let storage = this.#getStorageData();

                try {
                    form = JSON.parse(form);
                    storage[form.formId] = form.data;
                    success();
                } catch(e){
                    failure(e);
                }
            }

            /**
             * Export form from the storage as file.
             *
             * @param String formId
             * @param callback success
             * @param callback failure
             * @return void
             */
            exportForm(formId,success = () => {},failure = () => {})
            {
                let timestamp = Date().now();
                let storage = this.#getStorageData();

                new JsFileDownloader({
                    contentType: 'application/json',
                    nativeFallbackOnError: true,
                    filename: `${formId}-${timestamp}.form`,
                    url: (
                        `data:text/json;charset=utf-8,`+
                        encodeURIComponent(JSON.stringify({
                            formId: formId, data: storage.storages[formId] ?? {}
                        }))
                    )
                }).start().then(success).catch(failure);
            }
        }(...args);
    };

    const formStorage = createFormLocalStorage(...args);

    return { formStorage };
}