import React, {
  useState
} from 'react';

import {
    get,
    assign,
} from 'lodash';

import {
    Box,
    Badge,
    Typography,
} from '@mui/material';

import moment from 'moment';
import { useTranslation } from 'react-i18next';
import Templates from './../../../../Templates/Templates';

function PlaceHolderCard({
  index, formId, form, selected, setSelected, placeholderGenerator
}) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const placeholder = assign({},form,{ form: placeholderGenerator() });

  const handleHover = () => {
      setIsHovered(true);
  };

  const handleHoverExit = () => {
      setIsHovered(false);
  };

  return (
      <div className={!selected ? '': 'animate-pulse'} id={`myform#selectTemplate:${formId}`}>
          <div style={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
                <Box
                    sx={{
                        scale: {
                            xl: '0.1',
                            sm: '0.3',
                            md: '0.5',
                            lg: '0.9',
                            xl: '1'
                        },
                        zoom: {
                            xl: '10%',
                            sm: '30%',
                            md: '50%',
                            lg: '90%',
                            xl: '100%'
                        }
                    }}
                >
                  <div
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverExit}
                    className={!isHovered
                      ? 'border-[3px] border-solid border-black dark:border-white opacity-100'
                      : 'border-[3px] border-dashed border-black dark:border-white opacity-50'
                    }
                  >
                      <Badge
                          max={999}
                          color="primary"
                          badgeContent={index}
                      >
                          <Templates
                            formId={formId}
                            placeholder={placeholder}
                            templateForm={get(form,'settings.form')}
                            formTemplate={get(form,'settings.template')}
                          />
                      </Badge>
                  </div>

                  <div
                    className='absolute p-[15px] top-[30px] left-[30px] text-white bg-[#00000085]'
                  >
                      <Typography fontSize="lg">
                        {moment.unix(
                          get(placeholder,'timestamps.createdAt')
                        ).format("dddd, MMMM Do, YYYY h:mm A")}
                      </Typography>
                  </div>
              </Box>
          </div>
      </div>
  );
}

export default PlaceHolderCard;