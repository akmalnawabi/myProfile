import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/images/theme_pattern.svg'
import mail_icon from "../../assets/images/mail_icon.svg";
import location_icon from "../../assets/images/location_icon.svg";
import call_icon from "../../assets/images/call_icon.svg";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ac676f64-50e7-4ba6-b392-852f946d84a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>i'm currently availaible</p>
          <div className="contact-details">
            <div className="contact-detail"><img src={mail_icon} alt="" />
            <p>akmalnawabi007@gmail.com</p></div>
            <div className="contact-detail"><img src={call_icon} alt="" />
            <p>(+93)785054336</p></div>
            <div className="contact-detail"><img src={location_icon} alt="" />
            <p>Kabul, AFG</p></div>
          </div>
        </div>
        <div className="contact-right">
            <form onSubmit={onSubmit} action="" className=''>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>

            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact