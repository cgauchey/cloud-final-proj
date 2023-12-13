import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';
import { setUserSession } from '../service/AuthService';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import { CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import UserPool from './UserPool';

const loginUrl = 'https://i0npk9dvld.execute-api.us-east-1.amazonaws.com/dev/login';

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

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        setMessage(data);
      },
      onFailure: (err) => {
        console.log("onFailure: ", err);
        setMessage(err?.message);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);

      }
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {message && <p className='message'>{message}</p>}
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );

  // const navigate = useNavigate();
  
  // const [errorMsg, setErrorMsg] = useState(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const username = data.get('username');
  //   const password = data.get('password');
  //   console.log(username, password);

  //   if (username.trim() === '' || password.trim() === '') {
  //       setErrorMsg('Both username and password are required');
  //       return;
  //   }
  //   setErrorMsg(null);

  //   const requestConfig = {
  //       headers: {
  //           'x-api-key': 'OdBbQrFaS19e60N4ngBX9aDvh3rbQqIl3cwMY3dN'
  //       }
  //   }
  //   const requestBody = {
  //       username: username,
  //       password: password
  //   }

  //   axios.post(loginUrl, requestBody, requestConfig).then(response => {
  //       setUserSession(response.data.user, response.data.token);
  //       navigate("/dashboard");
        
  //   }).catch(error => {
  //       if (error.response.status == 401) {
  //           setErrorMsg(error.response.data.message);
  //       } else if (error.response.status === 403) {
  //           // setErrorMsg(error.response.data.message);
  //           setErrorMsg('Wrong password');
  //       } else {
  //           setErrorMsg('sorry, backend server down - please try again later')
  //       }
  //   })

  //   console.log('password attempt');
  // }

  // return (
  //   <ThemeProvider theme={defaultTheme}>
  //     <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           marginTop: 8,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           Sign in
  //         </Typography>
  //         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  //           <TextField
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="username"
  //             label="Username"
  //             name="username"
  //             autoComplete="username"
  //             autoFocus
  //           />
  //           <TextField
  //             margin="normal"
  //             required
  //             fullWidth
  //             name="password"
  //             label="Password"
  //             type="password"
  //             id="password"
  //             autoComplete="current-password"
  //           />
  //           <FormControlLabel
  //             control={<Checkbox value="remember" color="primary" />}
  //             label="Remember me"
  //           />
  //           <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             sx={{ mt: 3, mb: 2 }}
  //           >
  //             Sign In
  //           </Button>
  //           {errorMsg && <p className='message'>{errorMsg}</p>}
  //           <Grid container>
  //             {/* <Grid item xs>
  //               <Link href="#" variant="body2">
  //                 Forgot password?
  //               </Link>
  //             </Grid> */}
  //             <Grid item>
  //               <Link href="/register" variant="body2">
  //                 {"Don't have an account? Sign Up"}
  //               </Link>
  //             </Grid>
  //           </Grid>
  //         </Box>
  //       </Box>
  //       <Copyright sx={{ mt: 8, mb: 4 }} />
  //     </Container>
  //   </ThemeProvider>
  // );
}
