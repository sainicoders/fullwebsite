import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Dashboard=()=>{
    const navigate = useNavigate()

    useEffect(()=>{
     const token = localStorage.getItem('token')
     if(!token){
         navigate('/Signin')
     }

    },[])
    
    return(
        <>
        <Header/>
        <div>
        <div id='dash'>
        <h5 style={{ lineHeight: '50px', marginLeft: '2vw' }}>Dashboard</h5>
        <span style={{ marginLeft: '2vw' }}>sainicoders</span>
      </div>
        </div>
       <div style={{marginTop:'5vh'}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
      
       
        <Grid item xs={6} md={4}>
          <Item >
            <h3 style={{marginLeft:"5vw"}}>Admin Links</h3>
            </Item>
            <div id="boxAd">
             <p style={{marginLeft:"5vw"}}>Create categary</p> 
            </div>
            <div id="boxAd">
            <p style={{marginLeft:"5vw"}}>Creat project</p>
            </div>
            <div id="boxAd">
            <p style={{marginLeft:"5vw"}}>view Orders</p>
            </div>
            <div id="boxAd">
            <p style={{marginLeft:"5vw"}}>Manage Product</p>
            </div>
         
        </Grid>
        
        <Grid item xs={6} md={8}>
          <Item>
          <h3 style={{marginLeft:"5vw"}}>User Information</h3> 
          </Item>
          <div id="boxAd">
             <p style={{marginLeft:"5vw",color:"black"}}>Sainicoders</p> 
            </div>
            <div id="boxAd">
            <p style={{marginLeft:"5vw",color:"black"}}>sainicoders2.0@gmail.com</p>
            </div>
            <div id="boxAd">
            <p style={{marginLeft:"5vw",color:"black"}}>Admin</p>
            </div>
        </Grid> 
      </Grid>
    </Box>
    
       </div>
        </>

    );
}
export default Dashboard;