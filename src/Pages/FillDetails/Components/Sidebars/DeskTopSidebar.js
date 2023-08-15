import './DeskTopSidebar.css';

import {
  List,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import React from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function DeskTopSidebar(props) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "fit-content",
        boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
      }}
    >
      <List disablePadding>
        {Object.entries(props.stepForm.handler.getInputs()).map(
          ([step,form],index) => {

            const activeForm = props.stepForm.handler.getInputs(null);

            return (
              <ListItem key={`desktopSidebar${step}:${index}-${form.id}`} disablePadding>
                <ListItemButton
                  component="a"
                  onClick={() => {props.handleTabClick(index,form)}}
                  sx={
                    ((activeForm?.id !== form.id)
                      ? null : { borderLeft: "3px solid rgb(0, 128, 255)" }
                    )
                  }
                >
                  <MultiIcon color="primary" name={form.icon} />
  
                    <ListItemText
                      className="IcoSpace"
                      sx={
                        ((activeForm?.id !== form.id)
                          ? {} : { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                        )
                      }
                    >
                      <Typography
                        color={
                          ((activeForm?.id !== form.id)
                            ? "primary": "inherit"
                          )
                        }
                      >
                        {t(form.name)}
                      </Typography>
                      <Divider />
                    </ListItemText>
                  </ListItemButton>
              </ListItem>
            )
          }
        )}
      </List>
    </Box>
  );
}

export default DeskTopSidebar;
