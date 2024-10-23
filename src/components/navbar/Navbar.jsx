import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/boldAkm.jpg";
import underline from '../../assets/images/nav_underline.svg'
import { Link } from 'react-router-dom'
import menu_open from '../../assets/images/menu_open.svg'
import menu_close from '../../assets/images/menu_close.svg'


const Navbar = () => {

  const [menu, setMenu] = useState("home")

  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />

      {/* this image is for mobile devices */}
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <Link className="anchor-list" to="/navbar">
            <p onClick={() => setMenu("home")}>Home</p>{" "}
            {menu === "home" ? <img src={underline} /> : <></>}
          </Link>
        </li>
        <li>
          <Link className="anchor-list" to="/about">
            <p onClick={() => setMenu("about")}>About</p>{" "}
            {menu === "about" ? <img src={underline} /> : <></>}
          </Link>
        </li>
        <li>
          <Link className="anchor-list" to="/services">
            <p onClick={() => setMenu("services")}>Services</p>{" "}
            {menu === "services" ? <img src={underline} /> : <></>}
          </Link>
        </li>
        <li>
          <Link className="anchor-list" to="/work">
            <p onClick={() => setMenu("work")}>Portfolio</p>{" "}
            {menu === "work" ? <img src={underline} /> : <></>}
          </Link>
        </li>
        <li>
          <Link className="anchor-list" to="/contact">
            <p onClick={() => setMenu("contact")}>Contact</p>{" "}
            {menu === "contact" ? <img src={underline} /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-connect">
        <Link to="/contact" className="connect-link">Connect With Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
