import './Button.css';

import React from 'react';

import {
    CircularProgress,
    Button as MuiButton,
} from '@mui/material';

function Button(props) {
  return (
    <div className="btn-cont">
        {[props?.state].map((value,index) => {
            switch(value){
                case 'normal':
                    return (
                        <MuiButton
                          variant="outlined"
                          className="outlined-btn"
                          onClick={props?.onClick}
                          disabled={props?.disabled}
                          key={`${index}@props?.key`}
                          sx={{ marginRight: "20px" }}
                        >
                          {props?.title}
                        </MuiButton>
                    );
                case 'loading':
                    return (
                        <MuiButton
                            variant="contained"
                            onClick={props?.onClick}
                            className="contained-btn"
                            disabled={props?.disabled}
                            key={`${index}@props?.key`}
                            sx={{ marginRight: "20px" }}
                        >
                          <CircularProgress color="inherit" size={25} />
                        </MuiButton>
                    );
                default: return <></>;
            }
        })}
    </div>
  );
}

export default Button;
