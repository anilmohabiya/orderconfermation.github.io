import React from 'react';
import Setimage from './Setimage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Cpage =()=>{
    return(
    <>
    
    <div className ="col-md-8 col-10 mx-auto">
  <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>


  <div class="card text-white  bg-secondary  mb-3 mt-5" >
  
  <div class="card-body">
  <h5 class="card-title mt-4 text-center">ORDER CONFORMATION</h5>
  
  <p class="card-text mt-5 text-center">jhon Doe thanks for your order!</p>

  <p class="card-text mb-5 text-center">we Recive your Order and will contact you as soon as<br/>
     your package is
           shipped. you can find your purches information below.</p>
    
  </div>
</div>
<div className=" text-center ">

<p>order summary</p>
<p>9th jaunary 2020</p>

<hr align="left" width="100%"/>

</div>
</div>
<Setimage/>



    </>       
    )
}
export default Cpage;