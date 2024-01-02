
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";
import Productdata from './Productdata';
const Product=()=>{
  const [Data, setFormData]=useState({
    name:"",
    price:"",
    category:"",
    description:""

  })
  const Navigate=useNavigate();
  const save=(e)=>{
    const {name,value}=e.target;
    setFormData({...Data ,[name] :value});
  }
  const submit= async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('http://localhost:3001/product', Data);
      if(response&&response.data){
        console.log(response.data);
        Swal.fire({
          icon:'success',
          titel:'success',
          text:'product successfully!'
          });
      }
      
    }
    catch (error) {
      console.error('error durinng product',error);
      if(error.response && error.response.data){
          console.error('Error details:',error.response.data);
      }
      else{
         console.log('Unexpecte error'); 
      }
    }
  }

  
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(

        <div>
         <div className="main-container">
            <div style={{display:'flex'}}>
            <h2>Product</h2>
            
            
            </div>
            <div>
      <Button variant="primary" onClick={handleShow} className="add-employee-btn">
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
       
        <Form onSubmit={submit}>

        <Modal.Body>
        <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridEmail">
       Product Name*
          <Form.Control type="text" name="name"  placeholder="name" value={Data.name} onChange={save} />
        </Form.Group>

        
      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridEmail">
         Product Price*
          <Form.Control type="text" placeholder="Enter The Price" name='price' value={Data.price} onChange={save} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState">
         Product Category*
          <Form.Select defaultValue="Choose..." name='category' value={Data.category} onChange={save}>
            <option>Electonics</option>
            <option>Clothing</option>
            <option>Sport and Outdoors</option>
          </Form.Select>
        </Form.Group>

       
      </Row>
      <Row className="mb-3">
      
        <Form.Group as={Col} controlId="formGridEmail">
         Product Description*
       
          <Form.Control type="text" placeholder="Enter the Description "name="description" value={Data.description} onChange={save} />
        </Form.Group>
       
      </Row>
    
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      </div><br/>
      <div>

       
        </div>
         </div>
         <Productdata/>
         </div>
    )
}
export default Product;