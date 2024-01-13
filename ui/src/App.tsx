import './App.css';
import { Box, CssBaseline } from '@mui/material';
import Header from './app/Header';
import { Sidebar } from './app/Sidebar';
import MainContent from './app/MainContent';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex' }} height='100%'>
        <Sidebar />
        <Box sx={{display: 'flex'}} flexGrow={1} justifyContent='flex-start' marginTop='12px' marginLeft='4px'>
          <MainContent />
        </Box>
      </Box>
    </>
  );
}

export default App;
