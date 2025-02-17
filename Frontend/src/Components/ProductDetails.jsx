import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userId") || ""; // Replace with dynamic user ID
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleUpdateClick = (product) => {
    setSelectedProduct(product); // Store the selected product
  };


  useEffect(() => {
    fetch(`http://localhost:8020/products/allProducts?uid=${userId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [userId]);

  let navigate = useNavigate();
  
  return (
    <div>
    <table className="table table-bordered table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Product Type</th>
          <th>Available Quantity</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productTypeName}</td>
              <td>{product.quantity}</td>
              <td>{product.price} Rs</td>
              <td><button className="btn btn-warning" onClick={() => handleUpdateClick(product)}>Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No products available</td>
          </tr>
        )}
      </tbody>
    </table>
    <button type='button' className='btn btn-primary mt-3 w-30' onClick={() => navigate(`/addproduct`)}>Add Product</button>
    </div>
  );
};

export default ProductDetails;
