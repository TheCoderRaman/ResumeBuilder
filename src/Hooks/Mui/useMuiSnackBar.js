import React, {
    useRef,
    useState,
  } from 'react';

import {
    Alert,
    Snackbar,
} from '@mui/material';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function useMuiSnackBar(){
    const context = useRef(null);
    const severity = useRef('success');
    const [status, setStatus] = useState(false);

    /**
     * Open snack bar.
     *
     * @return void
     */
    const open = () =>
    {
        setStatus(true);
    };

    /**
     * Close snack bar.
     *
     * @return void
     */
    const close = () =>
    {
        setStatus(false);
    };

    /**
     * Set severity of the snack bar.
     *
     * @param String type
     * @return void
     */
    const alert = (type) =>
    {
      severity.current = type;
    };

    /**
     * Set message of the snackbar.
     *
     * @param String text
     * @return void
     */
    const message = (text) =>
    {
      context.current = text;
    };

    const handleOnClose = (e, reason) =>
    {
      if (reason === 'clickaway') {
        return;
      }

      setStatus(false);
    };

    const RenderMuiSnackBar = (props) =>
    {
      return (
        <Snackbar
          {...props}
          open={status}
          color="primary"
          onClose={handleOnClose}
          action={(
            <React.Fragment>
                <IconButton
                  size="small"
                  color="inherit"
                  aria-label="close"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
            </React.Fragment>
          )}
        >
          <Alert
            sx={{ width: '100%' }}
            onClose={handleOnClose}
            severity={severity.current}
          >
            {context.current}
          </Alert>
        </Snackbar>
      );
    }
    
    return { open, close, alert, message, RenderMuiSnackBar };
}