import React from 'react';
import Input from './../Forms/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { isEmpty } from './../../../../Utils/isEmpty';

function Inputs(props) {
  const { t } = useTranslation();
  const { form, handler,...attributes } = props;

  const onChange = (e) => {
    handler.setValue(form?.name,
      e.target.value
    );
  }

  switch(form?.type){
    case 'text':
        return (
            <Input
              {...attributes}
              {...form?.props}
              
              onChange={onChange}

              type={'text'}
              name={form?.name}
              value={handler?.watch(form?.name)}
              title={t(form?.title ?? form?.name)}
              helperText={handler?.errors[form?.name]?.message}
              error={!isEmpty(handler?.errors[form?.name]?.message) ? true : false}
            />
        );
    case 'email':
        return (
            <Input
              {...attributes}
              {...form?.props}
              
              onChange={onChange}

              type={'email'}
              name={form?.name}
              value={handler?.watch(form?.name)}
              title={t(form?.title ?? form?.name)}
              helperText={handler?.errors[form?.name]?.message}
              error={!isEmpty(handler?.errors[form?.name]?.message) ? true : false}
            />
        );
    case 'number':
        return (
            <Input
              {...attributes}
              {...form?.props}
              
              onChange={onChange}

              type={'number'}
              name={form?.name}
              value={handler?.watch(form?.name)}
              title={t(form?.title ?? form?.name)}
              helperText={handler?.errors[form?.name]?.message}
              error={!isEmpty(handler?.errors[form?.name]?.message) ? true : false}
            />
        );
      case 'select':
        return (
            <FormControl fullWidth>
              <InputLabel id={`${form.name}-label`}>
                {t(form?.title ?? form.name)}
              </InputLabel>
              <Select
                {...attributes}
                {...form?.props}
                
                onChange={onChange}

                name={form?.name}
                label={`${form.name}-label`}
                value={handler?.watch(form?.name)}
                title={t(form?.title ?? form?.name)}
              >
                {form?.props?.options.map((value,index) => {
                  return (
                    <MenuItem key={`${form.name}#${index}`} value={index}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
        );
  }
}

export default Inputs;
