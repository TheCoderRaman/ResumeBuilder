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
    Button,
    Typography,
} from '@mui/material';

import moment from 'moment';
import { useTranslation } from 'react-i18next';
import Templates from './../../../../Templates/Templates';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function PlaceHolderCard({
  index, formId, form, handleClick, selected, setSelected, placeholderGenerator
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

  const onClickHandler = (e, type) => {
      e.preventDefault();

      setSelected(true);
      handleClick(type, formId);
  };

  return (
      <div className={!selected ? '': 'animate-pulse'} id={`myform#selectTemplate:${formId}`}>
          <div style={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
                <Box
                    sx={{
                        scale: {
                            xs: '0.70',
                            sm: '0.85',
                            md: '0.90',
                            lg: '0.95',
                            xl: '1'
                        },
                        zoom: {
                            xs: '70%',
                            sm: '85%',
                            md: '90%',
                            lg: '95%',
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
                  
                  {isHovered && (
                      <div
                          onMouseEnter={handleHover}
                          style={{
                              top: '50%',
                              left: '50%',
                              display: 'flex',
                              flexWrap: 'nowrap',
                              flexDirection: 'row',
                              position: 'absolute',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transform: 'translate(-50%, -50%)',
                          }}
                      >
                          {Object.entries({
                              download: {
                                  title: 'Download',
                                  icon: 'DownloadForOffline'
                              },
                              Generate: {
                                  title: 'Generate',
                                  icon: 'WorkspacePremium'
                              },
                              update: {
                                  title: 'Update',
                                  icon: 'SaveAs'
                              },
                              delete: {
                                  title: 'Delete',
                                  icon: 'DeleteForever'
                              }
                          }).map(([type,action]) => {
                              return (
                                  <Button
                                    type="submit"
                                    color="inherit"
                                    variant="outlined"
                                    onClick={(e) => onClickHandler(e, type)}
                                    style={{
                                        margin: '0px 5px 0px 5px',
                                        background: 'rgb(255 255 255 / 85%)',
                                    }}
                                    key={`#${formId}:action-${index}@${type}`}
                                    className="font-bold py-2 px-4 rounded border-1 border-solid hover:border-dashed"
                                  >
                                    <MultiIcon name={action?.icon} color="inherit" fontSize='large' />
                                    <Typography color="black">
                                        {t(action?.title)}
                                    </Typography>
                                  </Button>
                              )
                          })}
                      </div>
                  )}
              </Box>
          </div>
      </div>
  );
}

export default PlaceHolderCard;