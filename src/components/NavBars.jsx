import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function NavBars() {
  return (
    <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand ms-3" to="/"><img src="/images/logo.png" width={50} alt="image" /></Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex ms-lg-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Nom Du Cours..." aria-label="Search"  />
        <i className='fa-solid fa-magnifying-glass search icoSearch'></i>
      </form>
      <ul className="navbar-nav ms-auto me-3 gap-lg-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page"  to="/" >Boutique</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ListCours">Liste Cours</NavLink>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Formateur">Formateurs</Link></li>
            <li><Link className="dropdown-item" to="/Blog">Blog</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i style={{color:"#0b5ed7"}} className="fa-solid fa-cart-shopping"></i>(<span className='count'>0</span>)</a>
        </li>
        <li className="nav-item">
          <img className="nav-link" width={50} src='./images/testimonial-1.png'/>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default NavBars