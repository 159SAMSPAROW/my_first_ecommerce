import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Contact US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your Email" />
          <button>Join US</button>
        </div>
        <div className="icons">
          <span className="fa-brands fa-whatsapp"></span>
          <span className="social">Whatsapp</span>
          <span className="fa-brands fa-snapchat"></span>
          <span className="social">Snapchat</span>
          <span className="fa fa-facebook icon-md"></span>
          <span className="social">Facebook</span>
          <span className="fa fa-instagram icon-md"></span>
          <span className="social">Instagram</span>
        </div>
      </div>
    </div>
  )
}
