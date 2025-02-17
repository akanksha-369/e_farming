import React, { useState } from "react";
import "./AdminSideBarStyle.css";
import Efarmlogo  from '../Assets/EfarmLogo.jpg';
import {
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaBars,
  FaUserMd,
  FaHospital,
  FaUserAlt,
  FaKeyboard,
  FaHouseUser,
  FaPowerOff
} from "react-icons/fa";
import { ImClubs } from "react-icons/im";
import { FaBagShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/aprofile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/adminmanagehospital",
      name: "Customer Controller",
      icon: <FaBagShopping />,
    },
    {
      path: "/doctors",
      name: "Farmer Controller",
      icon: <ImClubs/>,
    },
    {
      path: "/report",
      name: "Report",
      icon: <FaRegChartBar />,
    },
    {
      path: "/apassword",
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
    <div className="container1">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          {/* style={{display: isOpen ? 'block' : 'none'}} */}
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          <div>
          <img src={Efarmlogo} style={{borderRadius:'50%', width:'70%'}}/>
            </div>
            Admin Dashboard
          </h1>
          {/* style={{marginLeft: isOpen ? '50px' : '0px'}} */}
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px", marginTop: isOpen ? "150px" : "0px" }}>
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

export default AdminSideBar;
