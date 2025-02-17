import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaList } from "react-icons/fa";
import logo from "../Assets/logo.jpeg";

const CustomerNavbar = () => {
    return (
        <Navbar bg="orange" expand="lg" className="shadow-sm py-2">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
                    <img 
                        src={logo}
                        alt="Logo"
                        height="40"
                        className="me-2"
                    />
                    ShopEase
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className="w-100">
                    {/* Search Bar Centered */}
                    <Form className="mx-auto d-flex" style={{ width: "40%" }}>
                        <FormControl 
                            type="search" 
                            placeholder="Search for products..." 
                            className="me-2 border rounded-pill px-3"
                        />
                        <Button variant="outline-primary" className="rounded-circle">
                            <FaSearch />
                        </Button>
                    </Form>

                    {/* Navigation Items Aligned Right */}
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/orders" className="d-flex align-items-center mx-2">
                            <FaList className="me-1 text-primary" /> Orders
                        </Nav.Link>
                        <Nav.Link as={Link} to="/wishlist" className="d-flex align-items-center mx-2">
                            <FaHeart className="me-1 text-danger" /> Wishlist
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="d-flex align-items-center mx-2">
                            <FaShoppingCart className="me-1 text-success" /> Cart
                        </Nav.Link>
                        <Nav.Link as={Link} to="/profile" className="d-flex align-items-center mx-2">
                            <FaUser className="me-1 text-secondary" /> Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomerNavbar;
