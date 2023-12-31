import './App.css';
import * as React from 'react';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/home/Home'
import Industries from './components/industries/Industries'
import Companies from './components/companies/Companies'
import Investors from './components/investors/Investors'
import { AppBar, Drawer } from './components/common/AppBar'
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import News from './components/news/News'
// import CustomLinkButton from './common/CustomLinkButton'; // Import the custom component

// import { useNavigate } from "react-router-dom";
import { getUser, resetUserSession } from './service/AuthService';

// testing
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  React.useEffect(() => {
    const fetchData = () => {
      const user = getUser();
      if (user) {
        setName(user.name || '');
        setUsername(user.username || '');
        setEmail(user.email || '');
        setIsLoggedIn(true);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  const logOutUser = () => {
    resetUserSession();
    setIsLoggedIn(false);
  }

  console.log(name, username, email, isLoggedIn);

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/industries" element={<Industries isLoggedIn={isLoggedIn} />} />
        <Route path="/companies" element={<Companies isLoggedIn={isLoggedIn} />} />
        <Route path="/investors" element={<Investors isLoggedIn={isLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
        <Route path="/signin" element={<SignIn isLoggedIn={isLoggedIn} />} />
        <Route path="/news" element={<News isLoggedIn={isLoggedIn} />} />
        <Route path="/register" element={<Register isLoggedIn={isLoggedIn} />} />
        <Route path="/signin" element={<SignIn isLoggedIn={isLoggedIn} />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;


