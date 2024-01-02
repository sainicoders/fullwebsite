
import React, { useState, useEffect } from 'react';

function Productdata() {
    

 
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/product/data')
      .then((response) => response.json())
      .then((data) => {

        // Check if data is an array or if it's an object with an array property
        const productArray = Array.isArray(data) ? data : data.products || [];
        setRows(productArray.map((product)=>({...product,id:product._id})));  
        // setRows(employeeArray.map((employee) => createData(employee.firstname, employee.email, employee.dob, employee.password)));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (  <div>  
          <div>
             <table style={{width:'100%',borderCollapse:'collapse',border:'1px solid #ddd'}}>
 <thead>
   <tr>
     <th style={{border:'1px solid #ddd'}}>
       Employee Name
     </th>
     <th style={{border:'1px solid #ddd'}}>
 Email 
 </th>
   </tr>
 </thead>
 <tbody>
   {rows.map((row,index)=>(
     <tr key={index} style={{border:'1px solid #ddd'}}>
       <td style={{border:'1px solid #ddd'}}>
         {row.name}
       </td>
       <td style={{border:'1px solid #ddd'}}>
         {row?.price}
       </td>
     </tr>
   ))}
 </tbody>




      </table>
    </div>
    </div>
  )
}

export default Productdata
