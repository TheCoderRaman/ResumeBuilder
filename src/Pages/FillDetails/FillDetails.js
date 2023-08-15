import './FillDetails.css';

import React, {
  useState,
  useEffect,
} from 'react';

import {
  useNavigate
} from 'react-router-dom';

import get from 'lodash/get';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { route } from './../../Utils/route';
import StepTab from './Components/Tabs/StepTab';
import Sidebar from './Components/Sidebars/Sidebar';
import { useStepForm } from './../../Hooks/useStepForm';
import { useLocalFormStorage } from './../../Hooks/useLocalFormStorage';
import { setCurrentForm } from './../../Redux/features/forms/formsSlice';
import { setCurrentTemplate } from './../../Redux/features/templates/templatesSlice';

function FillDetails() {
  const sf = useStepForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stepId,setStepId] = useState(0);
  const { formStorage:fs } = useLocalFormStorage();
  const [updatedAt,setUpdatedAt] = useState(moment().unix());

  useEffect(() => {
    let form = null;

    if(fs.hasFormSelected()){
      form = fs.getFormSelected();
    }

    if(null !== form){
      form = form.formId;
    } else {
      form = fs.createForm({
        settings: {
          form: sf.forms.selected,
          template: sf.templates.selected,
        }
      });
    }

    form = fs.getFormById(form);

    sf.handler.initStepForm(form,({config,data}) => {
        let form = fs.getFormSelected();
        
        fs.completedForm(
          form.formId
        );
        fs.resetSelectedForm();
        
        fs.resetSelectedGenerateForm();
        fs.selectedGenerateForm(form.formId);
  
        navigate(route('GeneratedResume'),{
          state: {
            formId: get(form,'formId'),
            form: get(form,'settings.form'),
            template: get(form,'settings.template')
          }
        });
      }
    );

    dispatch(setCurrentForm(form.settings.form));
    dispatch(setCurrentTemplate(form.settings.template));
  },[]);

  return (
    <div className="details-filling-cont">
      <Sidebar
        stepForm={sf}
        stepId={stepId}
        formStorage={fs}
        setStepId={setStepId}
        refresh={() => {setUpdatedAt(moment().unix())}}
      />
      
      <StepTab
        stepForm={sf}
        stepId={stepId}
        formStorage={fs}
        setStepId={setStepId}
        refresh={() => {setUpdatedAt(moment().unix())}}
      />
    </div>
  )
}

export default FillDetails;