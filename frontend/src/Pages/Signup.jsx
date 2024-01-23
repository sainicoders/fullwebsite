import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import { Col } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Signup=()=>{

     
  const [Data, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    Key:'',
    gender:''
  });
const Navigate=useNavigate();
  const register = (e) => {
    const { name, value } = e.target;
    setFormData({ ...Data, [name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/Signup', Data);
      if (response && response.data) {
        console.log(response.data);
        Swal.fire({
          icon:'success',
          titel:'success',
          text:'Reggistration successfully!'
          });
          Navigate('/Signin');
      }
    } 
    catch (error) {
      console.error('error durinng signnup',error);
      if(error.response && error.response.data){
          console.error('Error details:',error.response.data);
      }
      else{
         console.log('Unexpecte error'); 
      }
    }
  }

     
  return(
    <>
      <Header />
      <div id='signup'>
        <h5 style={{ lineHeight: '50px', marginLeft: '2vw' }}>Signup Page</h5>
        <span style={{ marginLeft: '2vw' }}>Signup to a world of Shopping</span>
      </div>
      

      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={4}>
          <div className="container" id="fill">
            <center>
              <LockOpenIcon />
              <br />
              <h2>Sign up</h2>
            </center>
            <form  onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name:</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  name="name"
                  value={Data.name} onChange={register}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  value={Data.email} onChange={register}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  value={Data.password} onChange={register}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="key">Key:</label>
                <input
                  type="key"
                  className="form-control"
                  id="key"
                  placeholder="Enter Key"
                  name="Key"
                  value={Data.Key} onChange={register}
                  required
                />
              </div>
              <br />
              <div>
              <label for="gender">Choose a gender:</label>
 <select id="gender" name="gender"   value={Data.genger} onChange={register}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
 </select><br/><br/>
              </div>
              <button type="submit" id="btn" className="btn btn-primary">
                Submit
              </button>
              <div id="account">
                <p>Already have an account? <Link to="/Signin">Sign in</Link></p>
              </div>
              <center>
                <footer id="fill">
                  Copyright @ sainicoders 2023
                </footer>
              </center>
            </form>
          </div>
        </Col>
      </Row>

    </>
 );
}


export default Signup;
