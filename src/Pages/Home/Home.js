import React from 'react';

import {
  Divider,
  Typography
} from '@mui/material';

import {
  useSelector,
  useDispatch
} from 'react-redux';

import { route } from './../../Utils/route';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyleIcon from '@mui/icons-material/Style';
import TemplateCard from './Components/Cards/TemplateCard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { setCurrentForm } from './../../Redux/features/forms/formsSlice';
import { setCurrentTemplate } from './../../Redux/features/templates/templatesSlice';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const templates = useSelector(
    (state) => state.templates.value
  );

  const handleOnSubmit = (id,template) => {
    dispatch(setCurrentTemplate(id));
    dispatch(setCurrentForm(template.form));

    setTimeout(() => {
      navigate(route('FillDetails'), {
          state: { id: id,template: template }
        }
      );
    },500);
  };

  return (
    <>
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
        {t('Templates')}
      </Typography>

      <Divider>
        <TipsAndUpdatesIcon color='primary' />
      </Divider>

      <Typography
        variant="h3"
        gutterBottom
        color='primary'
        component='div'
        sx={{
          marginTop: "10px",
          fontSize: {
            xs: ".875rem",
            lg: "1.875rem",
            md: ".875rem",
            sm: ".875rem",
          }
        }}
        className="mt-4 font-bold text-xl text-center md:text-2xl" 
      >
        {t('Select a Template to Get Started')}
      </Typography>

      <Divider>
        <StyleIcon color="primary" fontSize="large" />
      </Divider>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl mt-8 px-8">
        {Object.entries(templates.forms).map(([id,template],index) => {
          return (
            <TemplateCard
              handleOnSubmit={handleOnSubmit}
              template={{id: id,data: template}}
              key={`selectTemplate:${index}#${id}`}
            />
          )
        })}
      </div>

      <Divider>
        <ViewCarouselIcon color="primary" fontSize="large" />
      </Divider>
    </>
  );
}

export default Home;