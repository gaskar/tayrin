import './App.css';
import { Box, Container, CssBaseline, Grid } from '@mui/material';
import Header from './app/Header';
import { Sidebar } from './app/Sidebar';
import MainContent from './app/MainContent';
import Footer from './app/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainContent />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
