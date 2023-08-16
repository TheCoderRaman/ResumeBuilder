import React, {
    useState
} from 'react';

import {
    useSelector
} from 'react-redux';

import set from 'lodash/set';
import merge from 'lodash/merge';
import invert from 'lodash/invert';
import cloneDeep from 'lodash/cloneDeep';
import { steps } from './../Data/forms/steps';

export function useStepForm() {
    const forms = useSelector(
        (state) => state.forms.value
    );
    const templates = useSelector(
        (state) => state.templates.value
    );

    const [callback, setCallback] = useState({
        completion: () => {}
    })

    const [data, setData] = useState(steps.data);
    const [config, setConfig] = useState(steps.config);

    /**
     * Initialize step form.
     *
     * @param Object formData
     * @return void
     */
    const initStepForm = (formData = {},completion = () => {}) => {
        let settings = formData?.settings;

        setData({
            filled: (
                formData?.form ?? {}
            ),
            inputs: (
                getSelectedForm()
            ),
        });

        setConfig({
            step: settings?.step ?? 0,
            status: (
                formData?.status ??
                obtainStepsStatusFromForm()
            ),
            steps: (
                Object.keys(
                    formData?.steps ??
                    obtainStepsFromForm()
                )
            )
        });

        setCallback(merge(callback,{ completion }));
    }

    /**
     * Get current step.
     *
     * @return Number
     */
    const getStep = () => {
        return config.step;
    }

    /**
     * Get current step id.
     *
     * @return String
     */
    const getStepId = () => {
        return config.steps[config.step];
    }

    /**
     * Get form template by name.
     *
     * @param String name
     * @return Object|null
     */
    const getForm = (name) => {
        return forms.templates[name] ?? null;
    }

    /**
     * Get current selected form template.
     *
     * @return Object|null
     */
    const getSelectedForm = () => {
        return forms.templates[
            forms.selected
        ];
    }

    /**
     * Get template form by name.
     *
     * @param String name
     * @return Object|null
     */
    const getTemplate = (name) => {
        return templates.forms[name] ?? null;
    }

    /**
     * Get current selected template form.
     *
     * @return Object|null
     */
    const getSelectedTemplate = () => {
        return templates.forms[
            templates.selected
        ];
    }

    /**
     * Get total steps.
     *
     * @return Number
     */
    const getTotalStep = () => {
        return config.steps.length;
    }

    /**
     * Set fill data of the form step.
     *
     * @param Object filled
     * @param String|Number|Null stepId
     * @return void
     */
    const setFormStepFilled = (filled,stepId) => {
        switch(typeof stepId)
        {
            case 'number':
                stepId = config.steps[stepId];
                break;
            case 'string':
                stepId = stepId;
                break;
            default:
                stepId = getStepId();
                break;
        }

        let _newData = cloneDeep(data);

        set(_newData,`filled.${stepId}`,null);
        set(_newData,`filled.${stepId}`,filled);

        setData(_newData)
    }

    /**
     * Set status of the form step.
     *
     * @param Boolean status
     * @param String|Number|Null stepId
     * @return void
     */
    const setFormStepStatus = (status,stepId) => {
        switch(typeof stepId)
        {
            case 'number':
                stepId = config.steps[stepId];
                break;
            case 'string':
                stepId = stepId;
                break;
            default:
                stepId = getStepId();
                break;
        }

        setConfig(merge(config,{
            status: {
                [stepId]: status
            }
        }))
    }

    /**
     * Build status for the form.
     *
     * @return Object|null
     */
    const buildStatusForForm = () => {
        let formStatus = {};

        Object.keys(getSelectedForm()).map(
            (_step) => {
                formStatus[_step] = false;
            }
        );

        return formStatus;
    }

    /**
     * Obtain all steps from the selected form.
     *
     * @return Object|null
     */
    const obtainStepsFromForm = () => {
        let formSteps = {};

        Object.keys(getSelectedForm()).map(
            (_step) => {
                formSteps[_step] = _step;
            }
        );

        return formSteps;
    }

    /**
     * Obtain all steps status from the selected form.
     *
     * @return Object|null
     */
    const obtainStepsStatusFromForm = () => {
        let formStatuses = {};

        Object.keys(getSelectedForm()).map(
            (_step) => {
                formStatuses[_step] = false;
            }
        );

        return formStatuses;
    }

    /**
     * Get current form steps config.
     *
     * @param String|Number|null stepId
     * @return Null|Object
     */
    const getSteps = (stepId) => {
        switch(typeof stepId)
        {
            case 'undefined':
                return config.steps;
            case 'string':
                return config.steps[
                    invert(config.steps)[stepId]
                ] ?? false;
            case 'number':
                return config.steps[stepId] ?? null;
        }

        return config.steps[this.getStep()] ?? null;
    }

    /**
     * Get current form status config.
     *
     * @param String|Number|null stepId
     * @return Boolean|Object
     */
    const getStatus = (stepId) => {
        switch(typeof stepId)
        {
            case 'undefined':
                return config.status;
            case 'number':
                return config.status[
                    config.steps[stepId]
                ] ?? false;
            case 'string':
                return config.status[stepId] ?? false;
        }

        return config.status[getStepId()] ?? false;
    }

    /**
     * Get current form filled data.
     *
     * @param String|Number|null stepId
     * @return Object
     */
    const getFilled = (stepId) => {
        switch(typeof stepId)
        {
            case 'undefined':
                return data.filled;
            case 'number':
                return data.filled[
                    config.steps[stepId]
                ] ?? {};
            case 'string':
                return data.filled[stepId] ?? {};
        }

        return data.filled[getStepId()] ?? {};
    }

    /**
     * Check weather current form step is completed.
     *
     * @param String|Number|null stepId
     * @return bool
     */
    const isStepCompleted = (stepId) => {
        switch(typeof stepId)
        {
            case 'undefined':
                return config.status;
            case 'number':
                return config.status[
                    config.steps[stepId]
                ] ?? false;
            case 'string':
                return config.status[stepId] ?? false;
        }

        return config.status[getStepId()] ?? false;
    }

    /**
     * Get current form inputs.
     *
     * @param String|Number|null stepId
     * @return Object
     */
    const getInputs = (stepId) => {
        switch(typeof stepId)
        {
            case 'undefined':
                return data.inputs;
            case 'number':
                return data.inputs[
                    config.steps[stepId]
                ] ?? {};
            case 'string':
                return data.inputs[stepId] ?? {};
        }

        return data.inputs[getStepId()] ?? {};
    }

    /**
     * Check weather current step is first step.
     *
     * @return bool
     */
    const isFirstStep = () => {
        return config.step <= 0;
    }

    /**
     * Check weather current step is last step.
     *
     * @return bool
     */
    const isLastStep = () => {
        return config.step >= config.steps.length - 1
    }

    /**
     * Check weather previous step exists.
     *
     * @return bool
     */
    const hasPreviousStep = () => {
        return config.step > 0;
    }

    /**
     * Check weather next step exists.
     *
     * @return bool
     */
    const hasNextStep = () => {
        return config.step < config.steps.length - 1;
    }

    /**
     * Forward to next step.
     *
     * @return void
     */
    const nextStep = () => {
        if((config.step + 1) > config.steps.length - 1){
            return;
        }

        setConfig(merge(config,{ step: config.step + 1}))
    }

    /**
     * Backward to previous step.
     *
     * @return void
     */
    const previousStep = () => {
        if((config.step - 1) < 0){
            return;
        }

        setConfig(merge(config,{ step: config.step - 1}))
    }

    /**
     * Goto to specified step.
     *
     * @param Number stepId
     * @return void
     */
    const gotoStep = (stepId) => {
        if(stepId < 0){
            return;
        }

        if(stepId > config.steps.length - 1){
            return;
        }

        setConfig(merge(config,{ step: stepId}))
    }

    /**
     * Progress linearly through all available steps.
     *
     * @return void
     */
    const performStepAction = () => {
        if(!isLastStep()){
            return nextStep();
        }

        return callback.completion({
            data: data,
            config: config,
            settings: {
                form: forms.selected,
                template: templates.selected
            }
        });
    }

    return {
        forms: forms, templates: templates, data: data, config: config, handler: {
            getStatus, hasNextStep, previousStep, gotoStep,initStepForm, isStepCompleted,
            getForm, buildStatusForForm, nextStep,obtainStepsStatusFromForm, obtainStepsFromForm, getFilled,
            getTemplate, setFormStepFilled, getInputs, getStep, getStepId, getSelectedForm, getSelectedTemplate,
            getTotalStep, getSteps, isFirstStep, isLastStep, hasPreviousStep,performStepAction, setFormStepStatus,
        }
    };
}