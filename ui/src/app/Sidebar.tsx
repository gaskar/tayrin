import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

export const Sidebar = () => {
  return (
    <Box>
      <List>
        {['Dashboard', 'Settings', 'History'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
