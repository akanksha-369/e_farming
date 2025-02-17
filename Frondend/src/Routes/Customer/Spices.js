import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import Spices1 from "../../Assets/Turmeric.jpeg"; 
import Spices2 from  "../../Assets/Mustard.jpeg"; 


const Spices = () => {
     const navigate = useNavigate();
    
    const products = [
        { img: Spices1, title: "Turmeric", price: 20 },
        { img: Spices2, title: "Musterd", price: 30 }
       
    ];

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Spices Product Details</h1>
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
                                    <a href="#" className="btn btn-secondary">Add to Cart</a>
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

export default Spices;