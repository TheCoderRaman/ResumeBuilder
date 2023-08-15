import React, {
  useState
} from 'react';

import {
  Divider,
  Typography,
  ListItemText
} from '@mui/material';

import './MobileSidebar.css';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function MobileSidebar(props) {
  const { t } = useTranslation();
  const [anchor, setAnchor] = useState(null);

  const open = Boolean(anchor);

  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <IconButton
        color="primary"
        id="long-button"
        aria-label="more"
        aria-haspopup="true"
        onClick={handleOpen}
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "long-menu" : undefined}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        open={open}
        id="long-menu"
        anchorEl={anchor}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
      >
        {Object.entries(props.stepForm.handler.getInputs()).map(
          ([step,form],index) => {

            const activeForm = props.stepForm.handler.getInputs(null);

            return (
              <MenuItem
                component="a"
                key={`mobileSidebar${step}:${index}-${form.id}`}
                onClick={() => {props.handleTabClick(index,form)}}
                sx={
                  ((activeForm?.id !== form.id)
                    ? null : { borderLeft: "3px solid rgb(0, 128, 255)" }
                  )
                }
              >
                <MultiIcon
                  name={form.icon} color="primary"
                />

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
              </MenuItem>
            )
          }
        )}
      </Menu>
    </div>
  );
}

export default MobileSidebar;
