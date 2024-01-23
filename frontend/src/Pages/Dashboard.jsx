
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const storedata = localStorage.getItem('data');
  const data = storedata ? JSON.parse(storedata) : null;
  console.log("GETDATA BY LOCALSTORAGE", data);
  const email = data.email;
  const name= data.name;
  // console.log("gmail", email);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Signin');
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        <div id='dash'>
          <h5 style={{ lineHeight: '50px', marginLeft: '2vw' }}>Dashboard</h5>
          <span style={{ marginLeft: '2vw' }}>{email} {name}</span>
          <div style={{marginLeft:"90vw",marginTop:"-70px"}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon style={{color:"white",fontSize:"30px"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
        </div>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Item>
                <h3 style={{ marginLeft: "5vw" }}>Admin Links</h3>
              </Item>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw" }}>Create category</p>
              </div>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw" }}>Create project</p>
              </div>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw" }}>View Orders</p>
              </div>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw" }}>Manage Product</p>
              </div>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item>
                <h3 style={{ marginLeft: "5vw" }}>User Information</h3>
              </Item>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw", color: "black" }}>Sainicoders</p>
              </div>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw", color: "black" }}>sainicoders2.0@gmail.com</p>
              </div>
              <div id="boxAd">
                <p style={{ marginLeft: "5vw", color: "black" }}>Admin</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
