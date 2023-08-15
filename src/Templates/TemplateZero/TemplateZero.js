import './TemplateZero.css';

import {
  Paper,
  Container,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';
import { useStepForm } from './../../Hooks/useStepForm';
import { useLocalFormStorage } from './../../Hooks/useLocalFormStorage';

const TemplateOne = (props) => {
  const {
    formId: id
  } = props;

  const sf = useStepForm();
  const { t } = useTranslation();
  const { formStorage:fs } = useLocalFormStorage();

  const form = fs.getFormById(id);
  const formTemplate = (
    sf.handler.getTemplate(get(form,'settings.template'))
  );

  return (
      <Paper
        square
        elevation={24}
        sx={{
          width: '100vh',
          height: '113vh',
          overflow: 'hidden'
        }}
        id={`#myForm:${id}-preview`}
        className='flex items-center justify-center'
      >
        <Container>
          <img
            sx={{
              minWidth: '100vh',
              minHeight: '113vh',
              overflow: 'hidden'
            }}
            className="object-fill content-center"
            alt={t(get(formTemplate,'name'))}
            src={get(formTemplate,'thumbnail')}
          />
        </Container>
      </Paper>
  );
};

export default TemplateOne;