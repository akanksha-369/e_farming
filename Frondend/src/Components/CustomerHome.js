import React, { useState } from "react";
import Rice from "../Assets/rice.jpeg";
import Wheat from "../Assets/Grains.jpg";
import Jawar from "../Assets/Jawar.jpg";
import Bajara from "../Assets/Bajra.jpg";
import Ragi from "../Assets/Ragi.jpg";
import Pulses from "../Assets/Pulses.jpg";
import Spices from "../Assets/spices.jpg";
import Legumes from "../Assets/Legumes.jpg";
import {useNavigate} from "react-router-dom"; 
import CustomerNavbar from "./CustomerNav";

const CustomerHome = () => {
    const [products, setProducts] = useState([]);
    const [cardWidth, setCardWidth] = useState('18rem');

    const addProduct = (product) => {
        setProducts([...products, product]);
    };
    const navigate=useNavigate();

    return (
        <div className="container mt-4">
          <CustomerNavbar/>
            <div className="row">
                {/* <div className="col-md-6">
                    <AddProduct addProduct={addProduct} />
                </div>
                <div className="col-md-6">
                    <ProductList products={products} />
                </div> */}


<div className="card "
  style={{ width: cardWidth , marginLeft:"50px" ,marginTop:"20px" ,width:"20%",height:"300px"}}>
               
  <img src={Rice} class="card-img-top"style={{height:"200px"}}  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rice</h5>
    <p class="card-text"></p>
    <button className="btn btn-primary" onClick={()=>navigate("/ricedetails")}>View Product</button>
  </div>
  </div>

<div className="card" style={{ width: cardWidth, marginLeft:"50px",marginTop:"20px",width:"20%",height:"300px" }}>
               
<img src={Wheat} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Wheat</h5>
    <p class="card-text"></p>
    <button className="btn btn-primary" onClick={()=>navigate("/wheat")}>View Product</button>
  </div>
</div>

<div className="card" style={{ width: cardWidth, marginLeft:"50px",marginTop:"20px",width:"20%" }}>
               
<img src={Jawar} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Jawar</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">view Product</a>
  </div>
  </div>
  <div className="card" style={{ width: cardWidth, marginLeft:"50px",marginTop:"20px",width:"20%" }}>
               
<img src={Bajara} class="card-img-top" style={{height:"200px"}}alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Bajara</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">view Product</a>
  </div>
  </div>




<div className="card" style={{ width: cardWidth, marginLeft:"50px",marginTop:"20px",width:"20%",height:"300px" }}>
               
<img src={Ragi} class="card-img-top"style={{height:"200px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ragi</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">view Product</a>
  </div>
</div>




 <div className="card" style={{ width: cardWidth, marginLeft:"50px" ,marginTop:"20px",width:"20%",height:"300px" }}>
               
<img src={Pulses} class="card-img-top" style={{height:"200px"}}alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Pulses</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">view Product</a>
  </div>
</div> 




<div className="card" style={{ width: cardWidth, marginLeft:"50px" , marginTop:"20px" ,width:"20%",height:"300px"}}>
<img src={Legumes} class="card-img-top" style={{height:"190px"}}alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Legumes</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">view Product</a>
  </div>
</div> 
<div className="card" style={{ width: cardWidth, marginLeft:"50px" , marginTop:"20px" ,width:"20%",height:"300px"}}>
<img src={Spices} class="card-img-top" style={{height:"200px"}}alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Spices</h5>
    <p class="card-text"></p>
    <button className="btn btn-primary" onClick={()=>navigate("/spices")}>View Product</button>
  </div>
</div> 

 </div>              

</div>    
    );
};

export default CustomerHome;