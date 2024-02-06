import React, { useState } from "react";
function Payment(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const options = {
          key: 'rzp_live_HGCsLV5PjSYo8F',
          amount: '10000',//faltu  hai ye
          currency: 'INR',
          name: 'DigiCoders Technologies',
          description: 'Fees Payment',
          image: '',
          order_id: 'order_NVClMI4ABUWhGK',
          callback_url: '',
          prefill: {
            name: name,
            email: email,
            contact: phone,
          },
          notes: {
            address: '22-23, IT Chauraha, Lucknow',
          },
          theme: {
            color: '#3399cc',
          },
          handler: function (response) {
            console.log('Payment ID = ' + response.razorpay_payment_id);
            console.log('Order ID = ' + response.razorpay_order_id);
            console.log('payment Success');
          },
        };
    
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };

    return(
     <div style={{marginLeft:'40vw'}}>
       
    <section className="section_form">
    <form id="consultation-form" className="feed-form" onSubmit={handleSubmit}>
    <input required="" placeholder="Name" type="text" onChange={(e)=>setname(e.target.value)}/>
    <input name="phone" required="" placeholder="Phone number" onChange={(e)=>setphone(e.target.value)}/>
    <input name="email" required="" placeholder="E-mail" type="email" onChange={(e)=>setemail(e.target.value)}/>
    <button className="button_submit">ORDER</button>
    </form>
</section>
     </div>
    )
}
export default Payment;
