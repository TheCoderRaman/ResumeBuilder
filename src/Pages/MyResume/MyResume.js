import './MyResume.css';

import React, {
  useState,
  useLayoutEffect,
} from 'react';

import {
  useDispatch
} from 'react-redux';

import {
  Box,
  Grid,
  Divider,
  Typography,
} from '@mui/material';

import jsPDF from 'jspdf';
import get from 'lodash/get';
import html2canvas from 'html2canvas';
import Stack from '@mui/material/Stack';
import { route } from './../../Utils/route';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isEmpty } from './../../Utils/isEmpty';
import Pagination from '@mui/material/Pagination';
import NotFound from './Components/Errors/NotFound';
import { progress } from './../../Data/actions/progress';
import TemplateCard from './Components/Cards/TemplateCard';
import { usePagination } from './../../Hooks/usePagination';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PlaceHolderCard from './Components/Cards/PlaceHolderCard';
import { useMuiSnackBar } from './../../Hooks/Mui/useMuiSnackBar';
import { useFormExtracter } from './../../Hooks/useFormExtracter';
import { useLocalFormStorage } from './../../Hooks/useLocalFormStorage';
import { setCurrentForm } from './../../Redux/features/forms/formsSlice';
import { setCurrentTemplate } from './../../Redux/features/templates/templatesSlice';

function MyResume() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const paginate = usePagination();
  const SnackBar = useMuiSnackBar();
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(false);
  const { formStorage:fs } = useLocalFormStorage();
  const { formExtracter: fmExtr } = useFormExtracter();

  const handlePageChange = (e, pageNumber) => {
    paginate.handler.gotoPage(pageNumber);
    
    setPage(paginate
      .handler.getPageNumber()
    );
    
    paginate.handler.paginateData();
  };

  const handleClick = (type,formId) => {
    SnackBar.close();

    setTimeout(() => {
      const form = fs.getFormById(formId);

      switch(type){
        case 'update':
          SnackBar.alert('info');
          SnackBar.message(
            t('Please update your resume on next page!')
          );

          SnackBar.open();

          setTimeout(() => {
            setSelected(false);

            fs.selectedForm(formId);

            dispatch(setCurrentForm(
              get(form,'settings.form')
            ));
            dispatch(setCurrentTemplate(
              get(form,'settings.template')
            ));

            navigate(route('FillDetails'), {
              state: { id: formId,
                template: get(form,'settings.template')
              }
            });
          },3000);
          break;
        case 'delete':
          SnackBar.alert('error');
          SnackBar.message(
            t('Resume Successfully Deleted')
          );

          SnackBar.open();

          setTimeout(() => {
            setSelected(false);
            
            fs.selectedForm(null);
            fs.deleteForm(formId);
  
            let forms = Object.entries(fs.getForms());
  
            paginate.handler.initPagination({
              perPage: 1, pageNumber: 1,
              items: (null === forms ?[] : forms)
            });
        
            paginate.handler.paginateData();
            
            setPage(paginate.handler.getPageNumber());
          },3000);
          break;
        case 'Generate':
          SnackBar.alert('info');
          SnackBar.message(
            t('Please generate your custom resume on next page!')
          );

          SnackBar.open();

          setTimeout(() => {
            setSelected(false);

            fs.resetSelectedGenerateForm();
            fs.selectedGenerateForm(form.formId);

            navigate(route('GeneratedResume'),{
              state: {
                formId: formId,
                form: get(form,'settings.form'),
                template: get(form,'settings.template')
              }
            });
          },3000);
          break;
        case 'download':
          SnackBar.alert('info');
          SnackBar.message(
            t('Generating PDF')
          );

          SnackBar.open();

          setTimeout(() => {
            html2canvas(document.getElementById(
              `#myForm:${formId}-preview`
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
                pdf.save(`${formId}.pdf`);
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
          break;
      }
    },500);
  };

  useLayoutEffect(() => {
    let forms = Object.entries(fs.getForms());

    paginate.handler.initPagination({
      perPage: 1, pageNumber: 1,
      items: (null === forms ?[] : forms)
    });

    paginate.handler.paginateData();
    setPage(paginate.handler.getPageNumber());
  },[]);

  return (
    <>
      <div className="my-resumes">
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
          {t('My Resumes')}
        </Typography>
  
        <Divider>
          <MilitaryTechIcon color="primary" fontSize="large" />
        </Divider>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            className="grid"
            alignItems="center"
            justifyContent="center"
          >
            {isEmpty(fs.getForms()) ? (
              <NotFound></NotFound>
            ) : (
              paginate.handler.getCurrentPageItems().map((data,index) => {
                  const [key, form] = data;

                  return ((progress.CLOSED ===
                    get(form,'settings.progress')) ? (
                      <TemplateCard
                        form={form}
                        formId={key}
                        style={{
                          width: '100vh',
                          height: '113vh',
                        }}
                        selected={selected}
                        setSelected={setSelected}
                        handleClick={handleClick}
                        key={`myform#formCard:${index}-${key}`}
                        index={paginate.handler.getPageNumber() * paginate.handler.getPerPage() + index}
                      />
                    ) : (
                      <PlaceHolderCard
                        form={form}
                        formId={key}
                        style={{
                          width: '100vh',
                          height: '113vh',
                        }}
                        selected={selected}
                        setSelected={setSelected}
                        handleClick={handleClick}
                        key={`myform#formCard:${index}-${key}`}
                        placeholderGenerator={() => {
                          return fmExtr.extractForm(get(form,'settings.form'))
                        }}
                        index={paginate.handler.getPageNumber() * paginate.handler.getPerPage() + index}
                      />
                    )
                  );
                }
              )
            )}
          </Grid>
        </Box>

        {!isEmpty(fs.getForms()) && (
          <Stack className='grid place-items-center h-15 my-10'>
              <Pagination
                onChange={handlePageChange}
                className='w-auto inline-block'
                count={paginate.handler.getPages()}
                page={paginate.handler.getPageNumber()}
              />
          </Stack>
        )}

        <SnackBar.RenderMuiSnackBar
            autoHideDuration={5000}
        />

        <Divider>
          <ViewCarouselIcon color="primary" fontSize="large" />
        </Divider>
      </div>
    </>
  )
}

export default MyResume;