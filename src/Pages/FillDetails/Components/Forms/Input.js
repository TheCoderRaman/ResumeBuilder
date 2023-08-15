import './Input.css';

import React from 'react';
import { TextField } from '@mui/material';

const Input = (props) => {
  return (
    <div className="input-component">
      
      <p className="input-title">
        {props.title}
      </p>

      <TextField {...props} />
    </div>
  );
};

export default Input;