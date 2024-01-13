import { Box, List, ListItem, ListItemText } from '@mui/material';

export const Sidebar = () => {
  return (
    <Box width={250} boxShadow={3}>
      <List>
        {['Home'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
