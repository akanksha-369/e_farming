import React  from "react";
import { Menuitems } from "./MenuItem";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpeg";

export default function NavBar(){
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={logo} alt="e-farming" />
        </div>
        <ul>
          {Menuitems.map((item, index) => {
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

