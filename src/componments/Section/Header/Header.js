import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className="header" id ='header'>
    <div className="flex">
      <a href="#home" className="logo">Hotels And Resorts</a>
      <a href="#availability" className="btn">check availability</a>
      <div id="menu-btn" className="fas fa-bars"></div>
        </div>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <a href="#about">About</a>
      <a href="#reservation">Reservation</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
      <a href="#reviews">Reviews</a>
      <Link to="/aboutus">About US</Link>
   </nav>
</section>
  )
}

export default Header