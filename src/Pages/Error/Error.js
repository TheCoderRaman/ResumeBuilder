import React from 'react';
import { route } from './../../Utils/route';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function Error() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      color="primary"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" color="primary">
        {t('404')}
      </Typography>
      
      <Typography variant="h6" color="primary">
        {t('The page you\'re looking for doesn\'t exist.')}
      </Typography>

      <Button
        color="primary"
        variant="contained"
        className="cursor-pointer"
        onClick={() => {navigate(route('Home'))}}
      >
        {t('Back Home')}
      </Button>
    </Box>
  );
}

export default Error;
