import React from "react";
import FarmerSidebar from "../../Components/FarmerSideBar";
import "./ProductStyle.css";

import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

const Product = () => {
  const containerStyle = {
    padding: "20px",
    width: "60%",
    marginTop: "4%",
    marginLeft:"5%"
  };
  return (
    <div style={{ display: "flex" }}>
      <FarmerSidebar />
      <div className="Container" style={containerStyle}>
      <Card  style={{width:'120%', backgroundColor:'greenyellow', marginTop:'2%', marginLeft:'%'}}>
        <CardHeader style={{ backgroundColor: "black", color: "white", height:'70px', fontSize:'30px' }}>
          Farmer Dashboard
        </CardHeader>
        <CardBody>
          <div className="dashboard">
            <div className="caard">
              <h2>Wheat</h2>
              <p>Total Quantity: 700</p>
            </div>

            <div className="caard">
              <h2>Rice</h2>
              <p>Total Quantity: 500</p>
            </div>
            <div className="caard">
              <h2>Pulse</h2>
              <p>Total Quantity: 50</p>
            </div>
            <div className="caard">
              <h2>Cereals</h2>
              <p>Total Quantity: 10</p>
            </div>
          </div>
          <div style={{marginLeft:'43%'}}>
          <Button className="btn btn-light" style={{width:'100px'}}>Save</Button>
          <Button className="btn btn-light" style={{width:'100px', marginLeft:'30px'}}>Update</Button>
          </div>
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default Product;
