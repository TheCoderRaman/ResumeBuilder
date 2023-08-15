import React,{
  useRef,
  useState,
} from 'react';

import {
  Paper,
  Divider,
  Typography,
} from '@mui/material';

import set from 'lodash/set';
import merge from 'lodash/merge';
import Education from './Education';
import KeySkills from './KeySkills';
import PersonalInfo from './PersonalInfo';
import Pagination from './../Footer/Pagination';
import WorkExperience from './WorkExperience';
import { useTranslation } from 'react-i18next';
import { isEmpty } from './../../../../Utils/isEmpty';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function StepTab(props) {
  const store = useRef({});
  const { t } = useTranslation();

  const ACTION_DELAY = 2000;
  const [warn,setWarn] = useState(false);
  const [paginateAction, setPaginateAction] = useState({
    previous: false, update: false, next: false, complete: false
  })

  const onSubmit = (data,e) => {
    e.preventDefault();

    let stepId = (props
      .stepForm.handler.getStepId()
    );

    let status = (props
      .stepForm.handler.getStatus()
    );

    let form = (props
      .formStorage.getFormSelected()
    );

    let steps = (props
      .stepForm.handler.obtainStepsFromForm()
    );

    status[stepId] = true;

    set(form,`steps`,steps);
    set(form,`status`,status);
    set(form,`form.${stepId}`,null);
    set(form,`settings.step`,(
      props.stepForm.handler.getStep()
    ));
    set(form,`settings.stepId`,stepId);

    (props
      .formStorage.updateForm(
        form?.formId, form
      )
    );

    set(form,`form.${stepId}`,data);

    (props
      .formStorage.updateForm(
        form?.formId, form
      )
    );

    (props.stepForm.handler
      .setFormStepStatus(true, stepId)
    );
    (props.stepForm.handler
      .setFormStepFilled(data, stepId)
    );

    handleClick(store.current.type);
  }

  const handleClick = (type) => {
    setPaginateAction(merge(paginateAction, {
      [type]: true
    }));

    setTimeout(() => {
      setWarn(false);
      setPaginateAction(merge(paginateAction, {
        [type]: false
      }));

      switch(type){
        case 'previous':
            props.stepForm.handler.previousStep();
            props.setStepId(props.stepForm.handler.getStepId());
          break;
        case 'next':
            props.stepForm.handler.performStepAction();
            props.setStepId(props.stepForm.handler.getStepId());
          break;
        case 'complete':
            props.stepForm.handler.performStepAction();
            props.setStepId(props.stepForm.handler.getStepId());
          break;
        default:
          props.refresh();
          break;
      }
    },ACTION_DELAY);
  };

  return (!isEmpty(props.stepForm.handler.getInputs()) && (
    <Paper
      elevation={3}
      className="p-2 border-[1px] border-gray-300"
      sx={{boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)"}}
    >
      <Typography className="text-center" color="primary" variant="h3" gutterBottom>
        {t(props.stepForm.handler.getInputs(null)?.name)}
      </Typography>

      <div
        className='p-3 min-h-[50vh]'
      >
        <Divider sx={{ margin: "10px 0px" }}>
          <MultiIcon
            color="primary"
            fontSize="large"
            name={props.stepForm.handler.getInputs(null)?.icon}
          />
        </Divider>

        {Object.entries({
          'key_skills': <KeySkills />,
          'personal_info': <PersonalInfo />,
          'education_details': <Education />,
          'work_experience': <WorkExperience />,
        }).map(([key,value],index) => {
          const stepForm = (props
            .stepForm.handler.getInputs(null)?.id
          );

          if(key !== stepForm){
            return;
          }

          return React.cloneElement(
            value, {
              tab: key,
              warn: warn,
              store: store,
              onSubmit: onSubmit,
              refresh: props.refresh,
              stepForm: props.stepForm,
              handleClick: handleClick,
              key: `tab#${index}-${key}`,
              pagination: (
                <Pagination
                  stepForm={props.stepForm}
                  actions={{paginateAction,setPaginateAction}}
                />
              )
            }
          );
        })}
        
        <Divider sx={{ margin: "10px 0px" }}>
          <MultiIcon color="primary" fontSize="large" name={'Subtitles'} />
        </Divider>
      </div>
    </Paper>
  ));
}

export default StepTab;
