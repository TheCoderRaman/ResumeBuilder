import React from 'react';

import get from 'lodash/get';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function StepFour({ form, themes, limit }) {
  const { palette } = themes;

  return (
    <List
      dense={true}
      sx={{
        width: '100%',
        scale: '1 0.8',
        backgroundColor: palette.secondary.main,
      }}
    >
      <ListItem sx={{ justifyContent: 'center' }}>
        {Object.entries(get(form,'stepFour.data')).map(
          ([key,value],index) => {
            if(index >= limit){
              return;
            }

            return (
              <Box
                variant="outlined"
                label={value?.skill}
                className="rounded-full p-2"
                key={`#Skills:${index}-${key}`}
                sx={{
                  height: '50px',
                  border: '1px solid',
                  margin: '0px 5px 0px 5px',
                  color: palette.quaternary.main,
                  background: palette.primary.main,
                  borderColor: palette.tertiary.main,
                }}
              >
                {value?.skill}
              </Box>
            );
          }
        )}
      </ListItem>
    </List>
  )
}

export default StepFour;