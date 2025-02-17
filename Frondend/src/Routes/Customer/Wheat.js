import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useCart}from "react-use-cart"
import { useNavigate } from "react-router-dom";
import Wheat1 from "../../Assets/Sihore.webp"; 
import Wheat2 from  "../../Assets/Grains.jpg"; 
import Wheat3 from  "../../Assets/Jawar.jpg"; 


const Wheat = () => {

    const {addItem} = useCart();
    const navigate = useNavigate();

    const products = [
        { img: Wheat1, title: "Sihore Wheat", price: 20 },
        { img: Wheat2, title: "Lokwan Wheat", price: 30 },
        { img: Wheat3, title: "Khapali Wheat", price: 28 },
    ];

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Wheat Product Details</h1>
            <div className="row justify-content-center g-4">
                {products.map((product, index) => (
                    <div key={index} className="col-md-4 d-flex">
                        <div className="card shadow-sm h-100 w-100">
                            {/* Fixed image height to ensure uniformity */}
                            <img src={product.img} className="card-img-top fixed-image" alt={product.title} />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Rs. {product.price}</p>
                                {/* Push buttons to the bottom */}
                                <div className="mt-auto">
                                <button 
                                        className="btn btn-primary me-2"
                                        onClick={() => navigate("/orderconfirmation", { state: { title: product.title, price: product.price } })}>
                                        Buy Now
                                    </button>
                                    <button className='btn btn-secondary'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Custom CSS for fixing image height
const styles = `
.fixed-image {
    height: 200px; /* Adjust height as needed */
    object-fit: cover; /* Ensures images scale properly */
    width: 100%;
}
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Wheat;