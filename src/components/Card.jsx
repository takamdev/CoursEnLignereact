import React from "react";

import "./cart.css";
function Card({produit}) {
   return (
      <div className="card p-0 mb-3 w-auto">
         <img src={produit.img} className="card-img-top w-auto" 
          alt="image" />
         <div className="card-body">
            <h5 className="card-title text-warning">
               <span className="etoile">★</span>
               <span className="etoile">★</span>
               <span className="etoile">★</span>
               <span className="etoile">★</span>
               <span className="etoile">★</span>
               <span className="text-black fs-6">
                  {" "}
                  {produit.point} ({produit.vue})
               </span>
            </h5>
            <h4 className="card-title">{produit.descCours}</h4>

            <p className="card-title">
               <img
                  src={produit.imgAuteur}
                  className="rounded-circle"
                  width={45}
                  height={45}
                  alt="image"
               />{" "}
               <span className="fs-5 fst-italic fw-bold">{produit.auteur}</span>
            </p>
            <div className="hstack align-items-center gap-3 border-top">
               <p className="p-2 fs-5 m-2 fw-bold">{produit.prix}</p>
               <button className="btn fw-bold text-primary border-prymary fw-medium p-2 ms-auto btAdd">
                  <i className="fa-solid fa-cart-shopping"></i> Add to cart
               </button>
            </div>
         </div>
      </div>
   );
}

export default Card;
