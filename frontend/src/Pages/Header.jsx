

import HomeIcon from '@mui/icons-material/Home';
 import StorefrontIcon from '@mui/icons-material/Storefront';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StoreIcon from '@mui/icons-material/Store';
// import Signin from './Signin'
import { Link } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Navbar collapseOnSelect expand="lg"  style={{color:'white',background:'#4B0082'}}>
      <Container fluid>
        <Navbar.Brand href="#home" style={{color:'white'}}><StoreIcon/>Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav class="nav">
          <Nav  eventKey={2}> <Link to='/Home'  style={{color:'white',textDecoration:'none',}}><HomeIcon/>Home</Link></Nav>
            <Nav><Link to='/Shop'  style={{color:'white',textDecoration:'none',}}><StorefrontIcon/>Shop</Link></Nav>
            <Nav><Link to='/Card'  style={{color:'white',textDecoration:'none',}}><ShoppingCartIcon/>Card</Link></Nav>
           <Nav ><Link to='/Signin'  style={{color:'white',textDecoration:'none',}}><AccountCircleIcon/>Signin</Link></Nav>
            <Nav ><Link to='/Signup' style={{color:'white',textDecoration:'none',}}><PersonAddIcon/>Signup</Link></Nav>
   
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;