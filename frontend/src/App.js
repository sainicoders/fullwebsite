import React  from 'react';

import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Shop from './Pages/Shop';

import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import Productdata from './Pages/Productdata';
import Payment from './Pages/Payment';


function App() {
  
  

  return (
    <div className="App">
      
      <Router>

        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Productdata" element={<Productdata/>}/>
          <Route path='/payment' element={<Payment/>}/>
         
        </Routes>
      </Router>
    </div>
    
  );
}


export default App;
