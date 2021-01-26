import React from 'react';
import anil from "./images/anil2.jpg";
const SetImage=()=>{
return(
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 col-12 mx-auto">
            <img src={anil} class="rounded float-left w-50  ml-lg-5 align-items-center" alt="..." />
                 
           

            </div>
           
            <div className="col-md-6 col-12 mx-auto ">
            <p className="b">ProductsName  <span className=' font-weight-bold'>casualsSHoes</span></p>
            <p className="b">Category  <span className=" font-weight-bold">Footwear</span></p>
            <p className="b">Price  <span className=" font-weight-bold">30BDH</span></p>
            
<hr align="left" width="100%"/>
           <p className="b">ProductID  <span className=' font-weight-bold'>FHSK34</span></p>
           <p className="b">Quantity  <span className=' font-weight-bold'>1</span></p>
            </div>
            <div className="text-center font-weight-bold">
                <p>Order Details</p>
            </div>
                     <div className="container col-md-6 col-10 bg-light">
                        
            <p className="b">Subtotalprice  <span className=' font-weight-bold'>30BDH</span></p>
            <p className="b">Shippingprice  <span className=" font-weight-bold">5BDH</span></p>
            <p className="b">Discountprice  <span className=" font-weight-bold">0BDH</span></p>
                     </div>
        </div>
    </div>
    </>

)
}
export default SetImage;