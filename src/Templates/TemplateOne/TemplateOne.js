import './TemplateOne.css';

import React, {
  useLayoutEffect
} from 'react';

import {
  Paper,
  Container,
} from '@mui/material';

import { themes } from './Data/themes';
import Top from './Components/Top/Top';
import { useTranslation } from 'react-i18next';
import Bottom from './Components/Bottom/Bottom';
import { isEmpty } from './../../Utils/isEmpty';
import { useStepForm } from './../../Hooks/useStepForm';
import { useLocalFormStorage } from './../../Hooks/useLocalFormStorage';

const TemplateOne = (props) => {
  const LIMIT = 3;

  const {
    formId: id,
    formTemplate: formTmpl,
    templateForm: tmplForm
  } = props;

  const sf = useStepForm();
  const { t } = useTranslation();
  const { formStorage:fs } = useLocalFormStorage();

  const { palette } = themes;
  const templateForm = sf.handler.getForm(tmplForm);
  const formTemplate = sf.handler.getTemplate(formTmpl);
  const form = props?.placeholder?.form ?? sf.handler.getFilled();

  useLayoutEffect(() => {
    sf.handler.initStepForm(fs.getFormById(id));
  },[]);

  return (isEmpty(form) ? (
      <></>
  ) : (
      <Paper
        square
        elevation={24}
        sx={{
          minWidth: "100vh",
          minHeight: "113vh",
          border: "1px solid black",
          backgroundColor: palette.primary.main,
        }}
        id={`#myForm:${id}-preview`}
        className='flex items-center justify-center'
      >
        <Container>
          <Top themes={themes} limit={LIMIT} templateForm={templateForm} form={form} />
          <Bottom themes={themes} limit={LIMIT} templateForm={templateForm} form={form} />
        </Container>
      </Paper>
      )
  );
};

export default TemplateOne;