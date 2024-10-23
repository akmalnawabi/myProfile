import React from 'react'
import './footer.css'
import logo from '../../assets/images/boldAkm.jpg'
import user_icon from '../../assets/images/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I am a fullstack developer graduated from Kabul university in 2024.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>2024 Akmal Nawabi, All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer