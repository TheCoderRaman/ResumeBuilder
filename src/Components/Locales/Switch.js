import React,{ 
  useState 
} from 'react';

import i18n from './../../i18n';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import ReactCountryFlag from "react-country-flag";
import FormControl from '@mui/material/FormControl';
import DialogTitle from '@mui/material/DialogTitle';
import { translation } from '../../Data/translation';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TranslateIcon } from './../Icons/TranslateIcon';

function Switch() {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [locale, setLocale] = useState(
    i18n.language
  );

  const handleChange = (e) => {
    setLocale(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
        <Button onClick={handleClickOpen}>
            <TranslateIcon></TranslateIcon>
        </Button>

        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{t('Select Your Language')}</DialogTitle>

        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel htmlFor="locale-dialog-native">
                <ReactCountryFlag
                  svg
                  cdnSuffix="svg"
                  style={{
                    width: '2em',
                    height: '2em',
                  }}
                  title={locale}
                  countryCode={Object.entries(
                    translation.resources
                  ).filter(
                    ([key]) => key === locale
                  ).at(0).at(1).countryCode}
                  cdnUrl={'/assets/images/flags/1x1/'}
                />
              </InputLabel>

              <Select
                native
                value={locale}
                onChange={handleChange}
                input={<OutlinedInput id="locale-dialog-native" />}
              >
                {Object.entries(translation.resources).map(
                  ([key,value]) => {
                    return (
                      <option key={key} value={key}>
                        {t(value.title)} - ({key})
                      </option>
                    )
                  }
                )}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            {t('Cancel')}
          </Button>
          <Button onClick={handleClose}>
            {t('Change')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Switch;
