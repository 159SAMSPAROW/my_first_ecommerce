import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/language.jpg" alt="" />
            <i className="fa-light fa-angle-down"></i>
          </div>
          <div className="item">
            <span>USD</span>
            <i className="fa-light fa-angle-down"></i>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            mY StOre
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-heart"></i>{' '}
            <div className="cartIcon">
              <i className="fa-regular fa-cart-shopping"></i>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
