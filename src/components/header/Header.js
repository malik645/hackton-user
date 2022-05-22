import React from 'react'
import hero from '../../images/hero.jpg'
import logo from '../../images/logo.png'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
    <div className='bg-info'>
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-light w-100 ">
  <a className="navbar-brand" href="#"><img src={logo} alt="logo" className='w-25' />
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/">Home </Link>
      </li>
 
      <li className="nav-item ">
        <Link className="nav-link text-white" to="/login">Login
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link text-white" to="/signUp">SignUp
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
    </div>
<div className='position-relative'>
<img src={hero} alt="hero-image" className='w-100 hero-image' />
<div className='container'>
<div className='row'>
<div className='hero-text position-absolute col-md-5'>
        <h1>Online Shoping</h1>
        <p>All types of produt are available here. Everyone can easily visit our website, add the item into card and purchased.</p>
        <button type="button" class="btn btn-primary">Click Here</button>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default Header
