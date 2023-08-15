import './GeneratedResume.css';

import React, {
  useRef,
  useState,
  useLayoutEffect,
} from 'react';

import {
  set,
  get,
} from 'lodash';

import {
  Box,
  Grid,
  Divider,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from '@mui/material';

import {
  useLocation
} from 'react-router-dom';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useForm } from 'react-hook-form';
import { useYup } from './../../Hooks/useYup';
import { useTranslation } from 'react-i18next';
import { isEmpty } from './../../Utils/isEmpty';
import SaveIcon from '@mui/icons-material/Save';
import NotFound from './Components/Errors/NotFound';
import { yupResolver } from '@hookform/resolvers/yup';
import PortraitIcon from '@mui/icons-material/Portrait';
import { progress } from './../../Data/actions/progress';
import TemplateCard from './Components/Cards/TemplateCard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import PlaceHolderCard from './Components/Cards/PlaceHolderCard';
import { useFormExtracter } from './../../Hooks/useFormExtracter';
import { useMuiSnackBar } from './../../Hooks/Mui/useMuiSnackBar';
import { useLocalFormStorage } from './../../Hooks/useLocalFormStorage';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function GeneratedResume() {
  const { yup } = useYup();
  const formSubmitRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:
    yupResolver(yup.object()
      .shape({file_name: (yup
          .string()
          .required()
      )
    }))
  });

  const { t } = useTranslation();
  const { state } = useLocation();
  const SnackBar = useMuiSnackBar();
  const [form, setForm] = useState(null);
  const [selected, setSelected] = useState(false);
  const { formStorage:fs } = useLocalFormStorage();
  const { formExtracter: fmExtr } = useFormExtracter();

  const onSubmit = (data, e) => {
    e.preventDefault();
    
    SnackBar.close();
    setSelected(true);

    let genform = fs.getFormById(
      get(form,'formId')
    );

    set(genform,`settings.name`,
      data?.file_name ?? null
    );

    fs.updateForm(get(form,'formId'),genform);

    setTimeout(() => {
      SnackBar.alert('info');
      SnackBar.message(
        t('Generating PDF')
      );

      SnackBar.open();

      setTimeout(() => {
        html2canvas(document.getElementById(
          `#myForm:${get(form,'formId')}-preview`
        ),{
          scale: 1.1,zoom: 1,
          onclone: (document, element) => {
            element.style.setProperty(
              'box-shadow','unset !important'
            );
            element.style.setProperty(
              "zoom", (1 / window.devicePixelRatio * 100) + "%"
            );
          }
        }).then(function(canvas) {
            SnackBar.close();
            setSelected(false);

            const pdf = new jsPDF("p", "mm", "a4");
            const image = canvas.toDataURL("image/png");

            let width = pdf.internal.pageSize.getWidth();
            let height = pdf.internal.pageSize.getHeight();
            
            pdf.addImage(image, "JPEG", 0, 0, width, height);

            SnackBar.alert('success');
            SnackBar.message(
              t('Resume Successfully Generated')
            );
            
            SnackBar.open();
            pdf.save(`${data?.file_name}.pdf`);
        }).catch(function (error) {
            SnackBar.close();
            setSelected(false);

            SnackBar.alert('error');
            SnackBar.message(
              t('Something Went Wrong!')
            );
            
            SnackBar.open();
        });
      },3000);
    },500);
  };

  useLayoutEffect(() => {
    if(!fs.hasFormGenerateSelected()){
      return;
    }

    setForm(fs.getFormGenerateSelected());
  },[]);

  return (
    <div className="generated-resumes">
      <Typography
        mt="50px"
        variant="h3"
        gutterBottom
        color='primary'
        component='div'
        sx={{
          fontSize: {
            xs: "1.875rem",
            lg: "2.875rem",
            md: "1.875rem",
            sm: "1.875rem",
          }
        }}
        className="mt-8 font-bold text-3xl text-center md:text-5xl"
      >
        {t('Generated Resume')}
      </Typography>

      <Divider>
        <WorkspacePremiumIcon color="primary" fontSize="large" />
      </Divider>

      {(null === form)? (
        <NotFound></NotFound>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              className="grid"
              alignItems="center"
              justifyContent="center"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className='mt-[1%] w-[500px]' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <PortraitIcon
                        color="success"
                        fontSize="large"
                        sx={{
                          color: 'action.active',
                        }}
                      />
    
                      <TextField
                        fullWidth
                        type="text"
                        color="primary"
                        name="file_name"
                        multiline={false}
                        variant="standard"
                        label={t('File Name')}
                        value={get(form,'settings.name',null)}
                        {...register('file_name')}
                        InputProps={{endAdornment:(
                            <InputAdornment position="start">
                              <IconButton
                                edge="end"
                                onClick={() => formSubmitRef.current.click()}
                              >
                                <SaveIcon
                                  color="success"
                                  fontSize="large"
                                />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        placeholder={t("The shorter and the plainer the better.")}
                        error={!isEmpty(errors['file_name']?.message) ? true : false}
                      />
                    </Box>
    
                    <button ref={formSubmitRef} type="submit" className='invisible' />
                </form>
            </Grid>
    
            <Grid
              container
              className="grid"
              alignItems="center"
              justifyContent="center"
            >
              {((progress.CLOSED === get(form,'settings.progress')) ? (
                  <TemplateCard
                    index={1}
                    form={form}
                    style={{
                      width: '100vh',
                      height: '113vh',
                    }}
                    selected={selected}
                    setSelected={setSelected}
                    formId={get(form,'formId')}
                    key={`myform#formCard:${get(form,'formId')}`}
                  />
              ) : (
                  <PlaceHolderCard
                    index={1}
                    form={form}
                    style={{
                      width: '100vh',
                      height: '113vh',
                    }}
                    selected={selected}
                    setSelected={setSelected}
                    formId={get(form,'formId')}
                    key={`myform#formCard:${get(form,'formId')}`}
                    placeholderGenerator={() => {
                      return fmExtr.extractForm(get(form,'settings.form'))
                    }}
                  />
                  )
              )}
            </Grid>
        </Box>
      )}

      <SnackBar.RenderMuiSnackBar
          autoHideDuration={5000}
      />

      <Divider>
        <ViewCarouselIcon color="primary" fontSize="large" />
      </Divider>
    </div>
  )
}

export default GeneratedResume;