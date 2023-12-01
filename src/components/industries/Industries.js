import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems  } from '../common/listItems';
import Chart from './Chart';
import SavedStartups from '../common/ListData';
import SearchBar from '../common/SearchBar';
import News from './News'
import { AppBar, Drawer } from '../common/AppBar'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        StartupsNYC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Industries() {
  const [open, setOpen] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Perform search/filter operations using the searchValue
    // E.g., call an API, filter data, etc.
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Industries
            </Typography>
            <IconButton color="inherit">
              <Button color="inherit">Log Out</Button>
            </IconButton>
          </Toolbar>
        </AppBar> */}

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton> */}
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>


        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Industries
          </Typography>
            <SearchBar placeholder="Search..." onChange={handleSearchChange} />
            <Grid container spacing={3}>
              {/* Top Startups */}

              <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h4" gutterBottom sx={{textAlign: 'left'}}>
                Top Startups
              </Typography>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: 500,
                  }}
                >
                  <SavedStartups title={'Top Startups'}/>
                </Paper>
              </Grid>

              {/* Top Investors */}
              <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h4" gutterBottom sx={{textAlign: 'left'}}>
                Top Investors
              </Typography>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: 500,
                  }}
                >
                  <SavedStartups title={'Top Investors'}/>
                </Paper>
              </Grid>


            </Grid>
            <Typography variant="h4" gutterBottom sx={{textAlign: 'left', paddingTop: 5}}>
                The Latest
              </Typography>
            <Grid container spacing={4}>
            <News/>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}