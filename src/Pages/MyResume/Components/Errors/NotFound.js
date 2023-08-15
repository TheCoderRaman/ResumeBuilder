import {
  Button,
  Typography
} from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { route } from './../../../../Utils/route';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NotFound() {
const navigate = useNavigate();
const { t } = useTranslation();

return (
  <div className="no-resumes-container" style={{ marginBottom: '5%', marginTop: '-10%', minHeight: '70vh'}}>
    <SentimentVeryDissatisfiedIcon
      color="primary"
      fontSize="inherit"
      sx={{fontSize: '35vh'}}
    />

    <Typography className="no-resumes-text" variant="h6" color="primary">
      {t('You do not have any resume yet. Make one to view it here.')}
    </Typography>

    <Button
      color="primary"
      variant="contained"
      className="cursor-pointer"
      onClick={() => {navigate(route('Home'))}}
    >
      {t('got back to Home')}
    </Button>
  </div>
);
}

export default NotFound;