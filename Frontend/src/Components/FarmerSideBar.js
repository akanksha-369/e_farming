import React, { useState } from "react";
import "./FarmerSidebarStyle.css";
import Efarmlogo from '../Assets/EfarmLogo.jpg';
import {
  FaUserAlt,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaBars,
  FaHouseUser,
  FaPowerOff,
  FaUserMd,
  FaHospital,
  FaKeyboard
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FarmerSideBar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    // {
    //   path: "/product",
    //   name: "Products",
    //   icon: <FaHospital />,
    // },
    {
      path: "/productdetail",
      name: "Product Details",
      icon: <FaTh />,
    },
    {
      path: "/password",
      name: "Change Password",
      icon: <FaKeyboard />,
    },   
    {
      path: "/",
      name: "Home",
      icon: <FaHouseUser />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaPowerOff />,
    }
  ];
  return (
    <div className="container1" >
      <div style={{ width: isOpen ? "300px" : "50px", backgroundColor:'#146ca4' }} className="sidebar">
        <div className="top_section">
          {/* style={{display: isOpen ? 'block' : 'none'}} */}
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          <div>
          <img src={Efarmlogo} style={{borderRadius:'50%', width:'70%'}}/>
            </div>
            Farmer Dashboard
          </h1>
          {/* style={{marginLeft: isOpen ? '50px' : '0px'}} */}
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px", marginTop: isOpen ? "150px" : "0px"  }}>
            {/* onClick={toggle} */}
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            {/* style={{display: isOpen ? 'block' : 'none'}} */}
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FarmerSideBar;
