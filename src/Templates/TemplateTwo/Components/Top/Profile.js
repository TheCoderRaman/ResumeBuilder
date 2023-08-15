import {
  Avatar as MuiAvatar
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import Avatar from 'react-string-avatar';

function Profile({ form, themes }) {
  const { palette } = themes;

  return (
    (null === get(form,'stepOne.photo.0',null)
  ) ? (
    <MuiAvatar sx={{
      border: '2px',
      width: '200px',
      height: '200px',
      border: '10px solid',
      color: palette.quaternary.main,
      borderColor: palette.tertiary.main,
    }}>
      <Avatar
        autoColor={true}
        pictureResolution={512} width={200}
        string={get(form,'stepOne.first_name')+' '+get(form,'stepOne.last_name')}
      />
    </MuiAvatar>
  ) : (
    <MuiAvatar
      sx={{
        border: '2px',
        width: '200px',
        height: '200px',
        border: '10px solid',
        color: palette.quaternary.main,
        borderColor: palette.tertiary.main,
      }}
      alt={get(form,'stepOne.first_name')+' '+get(form,'stepOne.last_name')}
      src={get(form,'stepOne.photo.0.img','/assets/images/fill-details/account.png')}
    />
  ));
}

export default Profile;