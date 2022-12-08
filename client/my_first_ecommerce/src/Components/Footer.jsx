import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Faq</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim
            quaerat commodi vero quae suscipit eligendi dolores id error
            repellat sapiente consectetur nostrum pariatur laborum itaque ,
            voluptatum iste temporibus modi!
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim
            quaerat commodi vero quae suscipit eligendi dolores id error
            repellat sapiente consectetur nostrum pariatur laborum itaque ,
            voluptatum iste temporibus modi!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className='left'>
            <span className='logo'>mY StOre</span>
            <span className='copyright'>
                c Copyright 2023. All Rights Reserved
            </span>
        </div>
        <div className='right'>
        <img src="/img/payment.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
