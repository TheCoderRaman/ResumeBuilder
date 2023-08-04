import {
  Divider,
  Typography
} from '@mui/material';

import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Share from './Components/Sharer/Share';
import ShareIcon from '@mui/icons-material/Share';
import SchoolIcon from '@mui/icons-material/School';
import { getRootUrl } from './../../Utils/getRootUrl';

function AboutUs() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Main Content */}
      <div className='items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]'>
        <Typography 
          gutterBottom
          variant="h3"
          color="primary"
          component='div'
          sx={{
            fontSize: {
              xs: "1.875rem",
              lg: "2.875rem",
              md: "1.875rem",
              sm: "1.875rem",
            }
          }}
          className="font-bold text-center mb-[2vw]"
        >
          <Box fontWeight='fontWeightMedium' display='inline'>
            ❝ {t('Welcome to our Resume Builder!')} ❞
          </Box>
        </Typography>
        <Divider className="mb-5">
          <SchoolIcon color="primary" fontSize="large" />
        </Divider>
        <Typography
          gutterBottom
          variant="body1"
          color="primary"
          sx={{
            marginTop: '20px',
            fontSize: {
              xs: "13px",
              sm: "15px",
              md: "17px",
              lg: "19px",
            },
            paddingRight: {
              xs: "15px",
              sm: "18px",
              lg: "25px",
            },
            textAlign: "justify"
          }}
        >
          {t('We understand the importance of creating a professional and impactful resume.')}
          {t('We believe that a well-crafted resume can make a significant difference in your job search, helping you stand out from the competition and land your dream job.')}

          <br /> 
          
          <span className="md:inline-flex my-10 md:ml-10 shadow rounded-sm w-full justify-center">
            {/* About us image */}
            <img src={'/assets/images/about-us/poster.jpg'} alt="Logo" className="object-none object-center" />
          </span>

          <br /> 

          {t('Our Resume Builder is designed to simplify the resume creation process, offering a user-friendly interface and a wide range of customizable templates.')}
          {t('Whether you\'re a recent graduate, a seasoned professional, or making a career transition, our platform provides the tools and resources you need to create a compelling resume that highlights your skills, experience, and achievements.')}
        </Typography>
        
        <Divider className="mb-5">
          <ShareIcon color="primary" fontSize="large" />
        </Divider>

        <Typography 
          variant="h4" 
          gutterBottom 
          color="primary" 
          className='mt-8 font-bold text-center'
        >
          {t('Share with Your Friends.')}
        </Typography>

        <Box mt="25px" mb="25px" className='mt-8 flex justify-center'>
          <Box
            className="icons"
            sx={{
              display: 'flex',
              gap: '10px'
            }}
          >
            <Share 
              url={getRootUrl()}
              hashtag={'#'+t('ResumeBuilder')}
              sites={[
                'Ok','Facebook','Twitter','Whatsapp','Reddit'
              ]} 
              quote={t('If you call failures experiments, you can put them in your resume and claim them as achievements')}
            />
          </Box>
        </Box>
      </div>
    </>
  )
}

export default AboutUs;