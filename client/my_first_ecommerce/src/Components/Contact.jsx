import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>Contact US : </span>
            <div className='mail'>
                <input type="text" placeholder='Enter your Email' />
                <button>Join US</button>
            </div>
            <div className="icons">
              <span class="fa-brands fa-whatsapp"></span>
              <span class="social">Whatsapp</span>
              <span class="fa-brands fa-snapchat"></span>
              <span class="social">Snap chat</span>
              <span class="fa fa-facebook icon-md"></span>
              <span class="social">Facebook</span>
              <span class="fa fa-instagram icon-md"></span>
              <span class="social">Instagram</span>
            </div>
        </div>
    </div>
  )
}
