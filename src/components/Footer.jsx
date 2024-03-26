import React from 'react'

function Footer() {
  return (
    <footer className=" d-flex align-items-center border-top container-fluid mt-5 pt-3 pb-2 mb-4">
         <p className="ms-md-5 fs-5">&copy;2023 HTTC, Inc</p>
         <p className="me-md-5 ms-auto d-flex  align-items-center gap-5">
            <i className="fa-brands fa-facebook" style={{transform:"scale(2)"}}></i>
            <i className="fa-brands fa-x-twitter" style={{transform:"scale(2)"}}></i>
            <i
               className="fa-brands fa-instagram-square"
               style={{transform:"scale(2)"}}
            ></i>
         </p>
      </footer>
  )
}

export default Footer