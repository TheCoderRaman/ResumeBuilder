import {
    get,
    set,
    isArray,
} from 'lodash';

import { useStepForm } from './useStepForm';

export function useFormExtracter(...args)
{
    const createFormExtracter = (...args) => {
        return new class FormExtracter
        {
            /**
             * Target form for extraction.
             *
             * @var String form
             */
            form = null;

            /**
             * Extracted form data.
             *
             * @var Object extracted
             */
            extracted = {};

            /**
             * Step form hook.
             *
             * @var Object stepForm
             */
            stepForm = useStepForm();

            /**
             * Initialize form extracter class.
             *
             * @param String form
             * @return void
             */
            constructor(form)
            {
                this.form = form;
            }

            /**
             * Get extracted data.
             *
             * @return Object
             */
            getExtracted()
            {
                return this.extracted;
            }

            /**
             * Extract form template data.
             *
             * @return void
             */
            extractIt()
            {
                this.#extractionIterator();
            }

            /**
             * Extract given form template data.
             *
             * @param String name
             * @return Object
             */
            extractForm(name)
            {
                this.form = name;
                this.#extractionIterator();

                return this.extracted;
            }

            /**
             * The extraction iterator for iterating over all inputs in form.
             *
             * @return void
             */
            #extractionIterator()
            {
                let formData = {};

                Object.entries(this.stepForm
                    .handler.getForm(this.form)
                ).map(([step,stepData]) => {
                    if(!isArray(get(stepData,'inputs'))){
                        return;
                    }

                    this.#performExtraction(
                        formData, step, stepData
                    );
                });

                this.extracted = formData;
            }

            /**
             * Perform extraction process on the given step data.
             *
             * @param String step
             * @param Object stepData
             * @return void
             */
            #performExtraction(formData, step, stepData)
            {
                Object.entries(get(stepData,'inputs')).map(
                    ([key,input]) => {
                        this.#extractSimpleInputs(
                            formData, step, input, key
                        );

                        this.#extractComplexInputs(
                            formData, step, input, key
                        );
                    }
                );
            }

            /**
             * Extract simple input from step input.
             *
             * @param Object formData
             * @param String step
             * @param Object input
             * @param String key
             * @return void
             */
            #extractSimpleInputs(
                formData, step, input, key
            ){
                if('fieldArray'
                  === get(input,'type')
                ){
                    return;
                }
                
                const { name, value } = input;

                set(formData, `${step}.${name}`,value);
            }

            /**
             * Extract complex inputs from step input.
             *
             * @param Object formData
             * @param String step
             * @param Object input
             * @param String key
             * @return void
             */
            #extractComplexInputs(
                formData, step, input, key
            ){
                if('fieldArray'
                  !== get(input,'type')
                ){
                    return;
                }

                Object.entries(get(input,'inputs')).map(
                    ([,field]) => {
                        const { name, value } = field;
                        
                        set(formData, `${step}.data.${key}.${name}`,value);
                    }
                );
            }
        }(...args);
    };

    return { formExtracter: createFormExtracter(...args) };
}