import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import Rice from "../../Assets/Basamati_Rice.jpg";
import Rice1 from "../../Assets/Bajra.jpg";
import Rice2 from "../../Assets/Ambemohar_Rice.jpg";

const RiceDetails = () => {
    const navigate = useNavigate();

    const products = [
        { img: Rice, title: "Basmati Rice", price: 20 },
        { img: Rice1, title: "Indrayani Rice", price: 30 },
        { img: Rice2, title: "Ambemohar Rice", price: 25 },
    ];

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Rice Product Details</h1>
            <div className="row justify-content-center g-4">
                {products.map((product, index) => (
                    <div key={index} className="col-md-4 d-flex">
                        <div className="card shadow-sm h-100 w-100">
                            <img src={product.img} className="card-img-top fixed-image" alt={product.title} />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Rs. {product.price}</p>
                                <div className="mt-auto">
                                    {/* Buy Now button navigates to OrderConfirmation */}
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

export default RiceDetails;
