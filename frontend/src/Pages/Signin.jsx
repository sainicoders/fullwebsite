
import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Signin=()=> {
  const [data,setformdata]=useState({
    email:'',
    password:''
  });
   const Navigate=useNavigate();
  const Signin=(e)=>{
    const {name,value}=e.target;

    setformdata({...data,[name]:value});
  }

  const handlelogin= async (e)=>{
    e.preventDefault();
    try{
      
     const response = await axios.post('http://localhost:3001/login',data);
     if(response && response.data && response.data.token){
      // console.log(response.data);
      /// store the token in localstoarge 
      localStorage.setItem('token',response.data.token);
      console.log("localstorage",localStorage)
      Swal.fire({
        icon:'success',
        titel:'success',
        text:'Login successfully!'
        });
        Navigate('/Dashboard');
     }
    }
    catch(error){
     console.error('error durinng signnup',error);
      if(error.response && error.response.data){
          console.error('Error details:',error.response.data);
      }
      else{
         console.log('Unexpecte error'); 
      }

    }
  }



  return (
    <>
      <Header />
      <div id='sign'>
        <h5 style={{ lineHeight: '50px', marginLeft: '2vw' }}>Signin Page</h5>
        <span style={{ marginLeft: '2vw' }}>Signin to a world of Shopping</span>
      </div>

      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={4}>
          <div className="container" id="fill">
            <center>
              <LockOpenIcon style={{background:'#EE82EE',borderRadius:'50%'}} />
              <br />
              <h2>Sign In</h2>
            </center>
            <form onSubmit={handlelogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={Signin}

                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="password"
                  value={data.password}
                  onChange={Signin}
                />
              </div>
              <br />
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                  />
                  Remember me
                </label>
              </div>
              <br />
              <button type="submit" id="btn" className="btn btn-primary">
                Submit
              </button>
              <div id="account">
                <Link to="/Forgot Password?">Forgot Password?</Link>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <a>Don't have an account? 
                  <Link to="/Signup">Sign up</Link></a>
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

export default Signin;
