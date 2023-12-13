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

import { SetMealSharp } from '@mui/icons-material';
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import UserPool from './UserPool';


const registerUrl = 'https://i0npk9dvld.execute-api.us-east-1.amazonaws.com/dev/register';

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

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const attributes = [
      { Name: 'phone_number', Value: phone },
      { Name: 'name', Value: name }
    ];

    UserPool.signUp(email, password, attributes, null, (err, data) => {
      if (err) {
        console.log(err);
        setMessage(err?.message);
      }
      console.log(data);
    });
  }

  return (
    // <div>
    //   <form onSubmit={onSubmit}>
    //     <label htmlFor='name'>Name</label>
    //     <input value={name} onChange={(event) => setName(event.target.value)}></input>
    //     <label htmlFor='email'>Email</label>
    //     <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
    //     <label htmlFor='phone'>Phone Number</label>
    //     <input value={phone} onChange={(event) => setPhone(event.target.value)}></input>
    //     <label htmlFor='password'>Password</label>
    //     <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
    //     <button type="submit">Signup</button>
    //     {response}
    //   </form>
    // </div>

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
            Register
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              onChange={(event) => setName(event.target.value)}
              autoFocus
            />
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
              id="phone"
              label="Phone (+1 0000000)"
              name="phone"
              autoComplete="phone"
              onChange={(event) => setPhone(event.target.value)}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {message && <p className='message'>{message}</p>}
            <Grid container>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Already have an account? Sign In"}
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
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     const name = data.get('name');
    //     const email = data.get('email');
    //     const username = data.get('username');
    //     const password = data.get('password');
    //     console.log(username, password);
        
    //     if ( name.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '' ) {
    //         setErrorMsg('all fields are required');
    //         return;
    //     }
    //     setErrorMsg(null);

    //     const requestConfig = {
    //         headers: {
    //             'x-api-key': 'OdBbQrFaS19e60N4ngBX9aDvh3rbQqIl3cwMY3dN'
    //         }
    //     }
    //     const requestBody = {
    //         username: username,
    //         email: email,
    //         name: name,
    //         password: password
    //     }

    //     axios.post(registerUrl, requestBody, requestConfig).then(response => {
    //         setErrorMsg('Registration Successful');
    //         navigate("/signin");
    //     }).catch(error => {
    //         if (error.response.status == 401 || error.response.status === 403) {
    //             setErrorMsg(error.response.data.message);
    //         } else {
    //             setErrorMsg('sorry, backend server down - please try again later')
    //         }
    //     })

    //     console.log('submit the registration');
    // }

    // return (
    //     <ThemeProvider theme={defaultTheme}>
    //       <Container component="main" maxWidth="xs">
    //         <CssBaseline />
    //         <Box
    //           sx={{
    //             marginTop: 8,
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //           }}
    //         >
    //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //             <LockOutlinedIcon />
    //           </Avatar>
    //           <Typography component="h1" variant="h5">
    //             Register
    //           </Typography>
    //           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="name"
    //               label="Name"
    //               name="name"
    //               autoComplete="name"
    //               autoFocus
    //             />
    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email"
    //               name="email"
    //               autoComplete="email"
    //               autoFocus
    //             />
    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="username"
    //               label="Username"
    //               name="username"
    //               autoComplete="username"
    //               autoFocus
    //             />
    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="current-password"
    //             />
    //             <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               sx={{ mt: 3, mb: 2 }}
    //             >
    //               Sign Up
    //             </Button>
    //             {errorMsg && <p className='message'>{errorMsg}</p>}
    //             <Grid container>
    //               <Grid item>
    //                 <Link href="/signin" variant="body2">
    //                   {"Already have an account? Sign In"}
    //                 </Link>
    //               </Grid>
    //             </Grid>
    //           </Box>
    //         </Box>
    //         <Copyright sx={{ mt: 8, mb: 4 }} />
    //       </Container>
    //     </ThemeProvider>
    // );
};

export default Register;