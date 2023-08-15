import React, {
  useRef
} from 'react';

import {
  Button,
  Divider
} from '@mui/material';

import './Education.css';

import Inputs from './../Forms/Inputs';
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import { useForm, useFieldArray } from 'react-hook-form';
// import { useYup } from './../../../../Hooks/useYup';
// import { yupResolver } from '@hookform/resolvers/yup';

function Education({
  tab, store, warn, onSubmit, stepForm, pagination
}) {
  const { t } = useTranslation();
  const formSubmitRef = useRef();

  const {
    reset,
    watch,
    control,
    setValue,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      data: stepForm.data.filled?.stepThree?.data ?? [{ }]
    }
  });

  const {
    fields,
    remove,
    append,
  } = useFieldArray({
    control, name: "data"
  });
  
  return (
    <div key={tab}>
      {warn && (
        <div>
          <Divider className="education-divider" />
          <Alert severity="warning">
            {t('Please fill out the form!')}
          </Alert>
          <Divider className="education-divider" />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => {
          let fieldLimit = {}, data = {};

          return (
            <div key={item.id} className="education-cont">
                <h3 className="education-heading">
                  {t('#{{id}} Education',{
                    id: index + 1
                  })}
                </h3>
                
                <div className="education-form-cont">
                  {Object.entries(stepForm.handler.getInputs(null)?.inputs ?? {}).map(
                    ([,form]) => {
                      const allowedInputs = [
                        'type'
                      ];

                      const { type, limit, inputs } = form;

                      if('fieldArray' !== type) {
                        return;
                      }

                      fieldLimit = limit;

                      return inputs.map((input) => {
                        if(!allowedInputs.includes(input?.name)){
                          return;
                        }

                        data[input?.name] = "";

                        return (
                          <Inputs
                            multiline={false}
                            variant="outlined"
                            handler={{
                              reset, watch, setValue,
                              register, setError, errors
                            }}
                            key={`input:${index}-${input?.name}`}
                            form={{...input,...{name: `data.${index}.${input?.name}`}}}
                          />
                        );
                      })
                    }
                  )}
                </div>

                <div></div>

                <div className="education-form-cont">
                  {Object.entries(stepForm.handler.getInputs(null)?.inputs ?? {}).map(
                    ([,form]) => {
                      const allowedInputs = [
                        'university', 'degree','start_year','end_year',
                      ];

                      const { type, limit, inputs } = form;

                      if('fieldArray' !== type) {
                        return;
                      }

                      fieldLimit = limit;

                      return inputs.map((input) => {
                        if(!allowedInputs.includes(input?.name)){
                          return;
                        }

                        data[input?.name] = "";

                        return (
                          <Inputs
                            multiline={false}
                            variant="outlined"
                            handler={{
                              reset, watch, setValue,
                              register, setError, errors
                            }}
                            key={`input:${index}-${input?.name}`}
                            form={{...input,...{name: `data.${index}.${input?.name}`}}}
                          />
                        );
                      })
                    }
                  )}
                </div>

                <div className='flex justify-between'>
                  {(index !== (fields?.length - 1) ||
                    fields?.length >= fieldLimit?.max
                  ) ? (<div key={'#fieldArray:empty-add'}></div>): (
                      <Button
                        type="button"
                        key={'#fieldArray:add'}
                        onClick={() => append(data)}
                      >
                        {t('Add')}
                      </Button>
                  )}
                  {(
                    fields?.length <= fieldLimit?.min
                  ) ? (<div key={'#fieldArray:empty-remove'}></div>): (
                      <Button
                        type="button"
                        key={'#fieldArray:remove'}
                        onClick={() => remove(index)}
                      >
                        {t('Remove')}
                      </Button>
                  )}
                </div>
                
                {(index >= fields?.length - 1) ? (
                  <></>
                ) : (
                  <Divider sx={{ margin: "25px 0px 5px 0px" }} />
                )}
            </div>
          )
        })}
        
        <Divider className="education-divider">
          {t('Showing step {{step}} of {{steps}} Steps', {
            step: stepForm.handler.getStep() + 1,
            steps: stepForm.handler.getTotalStep()
          })}
        </Divider>

        <button ref={formSubmitRef} type="submit" className='invisible' />
      </form>

      {React.cloneElement(
        pagination, {
          onClickHandle: (type) => {
            store.current.type = type;
            formSubmitRef.current.click();
          }
        }
      )}
    </div>
  );
}

export default Education;