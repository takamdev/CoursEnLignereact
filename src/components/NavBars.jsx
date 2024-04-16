import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../../Store.js'
import Cart from './Cart.jsx'

function NavBars() {
  const produit = useStore((state)=>state.produit)
  const hide = ()=>{
    document.querySelector('#navbarSupportedContent').classList.remove('show')
  }
  return (
    <>
     <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand ms-3" onClick={hide} to="/"><img src="/images/logo.png" width={50} alt="image" /></Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
    <form className="d-flex ms-lg-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Nom Du Cours..." aria-label="Search"  />
        <i className='fa-solid fa-magnifying-glass search icoSearch'></i>
      </form>
      <ul className="navbar-nav ms-auto me-3 gap-lg-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" onClick={hide} aria-current="page"  to="/" >Boutique</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={hide} to="/ListCours">Liste Cours</NavLink>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" onClick={hide} to="/Formateur">Formateurs</Link></li>
            <li><Link className="dropdown-item" onClick={hide} to="/Blog">Blog</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" href="#"><i style={{color:"#0b5ed7"}} className="fa-solid fa-cart-shopping"></i>(<span className='count'>{produit.length}</span>)</a>
        </li>
        <li className="nav-item">
          <img className="nav-link" width={50} src='/images/testimonial-1.png'/>
        </li>
      </ul>
     
    </div>
  </div>
    </nav>

   <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Panier</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <Cart/>
    </div>
  </div>
    </>
   
  )
}

export default NavBars