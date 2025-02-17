import React from "react";
import FarmerSidebar from "../../Components/FarmerSideBar";
import FarmerProductList from "../../Components/FarmerProductsList";

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
import ProductDetails from "../../Components/ProductDetails";

const ProductDetail = () => {
  const containerStyle = {
    padding: "20px",
    width: "60%",
    margin: "4% 14%",
  };
  return (
    <div style={{ display: "flex" }}>
      <FarmerSidebar />
      <div className="Container" style={containerStyle}>
        <ProductDetails/>
      </div>
    </div>
  );
};

export default ProductDetail;
