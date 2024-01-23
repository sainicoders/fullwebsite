import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Productdata(){

  const [data,setdata]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get('http://localhost:3001/product/data');
        setdata(response.data.products);
      }
      catch(error){
        console.error(error)
      }
    }
    fetchData();
  },[])
  return(
    <Grid container spacing={3} >
  <Grid item xs>
    <Item style={{display:"flex",float:"left"}}>
      {data.map(products =>(
             <Card sx={{ maxWidth: 300 }}>
             <CardActionArea>
              
              <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   Name :{products.name}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                
                 
                 <br/><br/>
                 <div id="pri">
                   Price: Rs. {products.price}
                 </div><br/>
                 <div id="pri">
                   Category: {products.category}
                 </div><br/>
                 <div id="pri">
                  Description:{products.description}
                 </div><br/>
                 <Button size="small" style={{backgroundColor:"blue",color:"white",borderRadius:"50px",margin:"5px"}}>in stock</Button> &nbsp; &nbsp;
                 <Stack direction="row" spacing={2} >
             
             <Button variant="contained" color="success" >
               view product
             </Button>
             <Button variant="outlined" color="error">
               add to card
             </Button>
           </Stack>
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
      ))};

    </Item>
  </Grid>
 
</Grid>
  )
}
export default Productdata;