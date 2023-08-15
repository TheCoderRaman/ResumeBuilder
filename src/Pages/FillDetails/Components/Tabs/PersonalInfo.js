import React, {
  useRef,
  useState,
  useEffect
} from 'react';

import {
  Avatar,
  Button,
  Divider,
  Snackbar
} from '@mui/material';

import './PersonalInfo.css';

import Inputs from './../Forms/Inputs';
import Alert from '@mui/material/Alert';
import Avatar1 from 'react-avatar-edit';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TitleDialog from './../Dialogs/TitleDialog';
import { useYup } from './../../../../Hooks/useYup';
import { isEmpty } from './../../../../Utils/isEmpty';
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogStyled } from './../Styles/DialogStyled';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { getWindowSize } from './../../../../Utils/getWindowSize';

function PersonalInfo({
  refresh, tab, store, warn, onSubmit, stepForm, pagination
}) {
  const { yup } = useYup();
  const formSubmitRef = useRef();

  const schema = yup.object().shape({
    first_name: (yup
        .string()
        .required()
    ),
    last_name: (yup
        .string()
        .required()
    ),
    email: (yup
        .string()
        .required()
    ),
    mobile: (yup
        .string()
        .required()
    ),
    address: (yup
        .string()
        .required()
    ),
    city: (yup
        .string()
        .required()
    ),
    state: (yup
        .string()
        .required()
    ),
    postal_code: (yup
        .string()
        .required()
        .minNumbers(6)
    ),
    objective: (yup
        .string()
        .required()
    )
  });

  const {
    reset,
    watch,
    setValue,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: stepForm.data.filled['stepOne'] ?? {}
  });

  const { t } = useTranslation();

  const [img, setImg] = useState("");
  const [open, setOpen] = useState(false);
  const [sotreImage, setSotreImage] = useState([]);

  const [loading, setLoading] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [imgSnackbar, setImgSnackbar] = useState(false);
  const [horizontal, setHorizontal] = useState("center");
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const onCrop = (view) => {
    setImg(view);
  };

  const onClose = (view) => {
    setImg(null);
  };

  const saveImage = () => {
    setOpen(false);
    setSotreImage([{ img }]);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setImgSnackbar(false);
  };

  useEffect(() => {
    refresh();
    setValue("photo",sotreImage);
  },[sotreImage]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  return (
    <div key={tab}>
      <center>
        <Avatar
          alt={t("Profile Image")}
          sx={{ width: 250, height: 250, marginBottom: 1 }}
          src={((img.length)
            ? img : (isEmpty(stepForm.data.filled['stepOne']?.photo)
              ? `/assets/images/fill-details/account.png`
              : stepForm.data.filled['stepOne']?.photo?.at(0)?.img
            )
          ) ?? `/assets/images/fill-details/account.png`}
        />
      </center>

      <div className='flex justify-center'>
        <Button
          className="change-profile-photo-btn"
          variant="outlined"
          onClick={handleClickOpen}
        >
          {t("Change Profile Photo")}
        </Button>

        <DialogStyled
          open={open}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
        >
          <TitleDialog
            id="customized-dialog-title"
            onClose={handleClose}
          >
            {t("Update Image")}
          </TitleDialog>
          <DialogContent>
            <Avatar1
              onCrop={onCrop}
              onClose={onClose}
              width={windowSize.innerWidth > 900 && 400}
              height={windowSize.innerWidth > 500 ? 400 : 150}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus variant="contained" onClick={saveImage}>
              {t("Save")}
            </Button>
          </DialogActions>
        </DialogStyled>
      </div>

      {warn && (
        <div>
          <Divider className="personal-details-divider" />
          <Alert severity="warning">
            {t('Please fill out the form!')}
          </Alert>
          <Divider className="personal-details-divider" />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-info-form-fields">
          {Object.entries(stepForm.handler.getInputs(null)?.inputs ?? {}).map(
            ([key,input],index) => {
              const inputs = [
                'first_name','last_name',
                'email','mobile','address',
              ];

              if(!inputs.includes(input?.name)){
                return;
              }

              return (
                <Inputs
                  form={input}
                  multiline={false}
                  variant="outlined"
                  key={`input:${index}-${key}`}
                  handler={{
                    reset, watch, setValue,
                    register, setError, errors
                  }}
                />
              );
            }
          )}
        </div>

        <div style={{ marginTop: 20 }} className="personal-info-form-fields">
          {Object.entries(stepForm.handler.getInputs(null)?.inputs ?? {}).map(
            ([key,input],index) => {
              const inputs = [
                'city','state','postal_code','objective'
              ];

              if(!inputs.includes(input?.name)){
                return;
              }

              return (
                <Inputs
                  form={input}
                  multiline={false}
                  variant="outlined"
                  key={`input:${index}-${key}`}
                  handler={{
                    reset, watch, setValue,
                    register, setError, errors
                  }}
                />
              );
            }
          )}
        </div>

        <Divider className="personal-details-divider">
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

      <Snackbar
        open={imgSnackbar}
        autoHideDuration={3000}
        key={vertical + horizontal}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical, horizontal }}
        message={t("Please select a profile image")}
      />
    </div>
  );
}

export default PersonalInfo;
