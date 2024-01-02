
import * as React from 'react';
import Header from './Header';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Shop=()=>{
    return(
        <>
        <Header/>
        <div style={{marginTop:"8vh"}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
       
        <Grid item xs={6} md={4}>
          <Item >
          <h4>Filter by categories</h4>
          <div >
            <ul>
           < input type="checkbox" />
              <span style={{marginTop:"10px"}}>Laptop</span> <br/><br/>
              < input type="checkbox"/>
              <span >Mobile</span><br/><br/>
              < input type="checkbox"/>
              <span >Watch</span>
            </ul>
           
            
          </div>
          <h4>Filter by Price Range</h4>
          <div>
          <ul >
           < input type="radio" />
              <span >Any</span> <br/><br/>
              < input type="radio"/>
              <span >rs0 to rs7150</span><br/><br/>
              < input type="radio"/>
              <span >rs17510 to rs25000</span><br/><br/>
              < input type="radio" />
              <span >rs50000 to rs100000</span> <br/><br/>
              < input type="radio"/>
              <span >rs200000 to rs300000</span><br/><br/>
              < input type="radio"/>
              <span >More than 300000 </span>
            </ul>

          </div >
          </Item>
         
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><h4>Products</h4>
          <div style={{float:"left"}}>
          <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div  style={{float:"left",marginLeft:"2vw"}}>

    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://img.freepik.com/premium-psd/close-up-floating-laptop-mockup_308775-6.jpg?w=996"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div style={{float:"left",marginLeft:"2vw"}}>

    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

          
          </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
     
        </>
    );
}
export default Shop;