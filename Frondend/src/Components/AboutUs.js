import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import handshake from '../Assets/handshake.jpg';
import farmer from '../Assets/farmer.jpg';
import customer from '../Assets/customer.jpg';

export default function AboutUs() {
    return (
        <div>
            <div className='py-5'>
                <NavBar />
            </div>
            <div className='py-4'>
                <h1 className="display-3 text-center">About Us</h1>
            </div>
            <div className="container" style={{ backgroundColor: 'black', minHeight: '400px', border: '2px solidrgb(0, 0, 0)'}}> {/* Single container */}
                <div className="row h-100">
                    <div className="col-md-6 h-100 d-flex flex-column justify-content-center">
                        <h2 className="text-center" style={{ color: 'grey', lineHeight: '1.5' }}>Why Efarming ?</h2>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                            We're building a platform where farmers and customers connect directly. We ensure fair
                            prices for farmers and provide customers with access to fresh, high-quality produce.
                        </h4>
                    </div>
                    <div className="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
                        <img
                            src={handshake}
                            alt="Image"
                            className="img-fluid h-100 w-100 object-fit-cover"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div> {/* End first row */}
            </div>

            <div className="container" style={{ backgroundColor: 'black', minHeight: '400px', marginTop: '4rem', marginBottom: '4rem', border: '2px solidrgb(0, 0, 0)' }}>
                <div className="row g-3 mt-3"> {/* New row for the second section, added margin top for spacing */}
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <img
                            src={farmer}
                            alt="Image"
                            className="img-fluid h-100 w-100 object-fit-cover"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="text-center" style={{ color: 'grey', lineHeight: '1.5' }}>What Farmers can do ?</h2>
                        <ul>
                            <li>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                            Sell their produce directly to customers.
                        </h4></li>
                        <li>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                            Receive fair prices for their hard work.
                        </h4></li>
                        <li>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                            Build relationships with their customers.
                        </h4></li>
                        </ul>
                    </div>
                </div> {/* End second row */}
            </div> {/* End single container */}

            <div className="container" style={{ backgroundColor: 'black', minHeight: '400px', marginTop: '4rem', marginBottom: '4rem', border: '2px solid rgb(0, 0, 0)'}}>
                <div className="row g-3 h-100 mt-3"> 
                    <div className="col-md-6">
                        <h2 className="text" style={{ color: 'grey', lineHeight: '1.5' }}>What Customers can do ?</h2>
                        <ul>
                            <li>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                        Access fresh, high-quality produce directly from the source.
                        </h4></li>
                        <li>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                        Support local farmers and their communities.
                        </h4></li>
                        <li>
                        <h4 className="lh-base lh-lg" style={{ color: 'grey', lineHeight: '1.5' }}>
                        Enjoy the satisfaction of knowing where their food comes from.
                        </h4></li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <img
                            src={customer}
                            alt="Image"
                            className="img-fluid h-100 w-100 object-fit-cover"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div> 
            </div>
            <div>
                <h1 className="text-center" style={{ marginBottom: '4rem'}}>Thankyou !!!</h1>
            </div>

        </div>
    )
}