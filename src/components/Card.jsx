import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import "./cart.css";
import { useStore } from "../../Store.js";
import { data } from "../../data.js";
function Card({produit}) {
const navigateTo = useNavigate();
const [etatBouton , setEtatBouton] = useState("Add to cart")
const [hide , setHide] = useState(false)
const updateProduit = useStore((state)=>state.updateProduit)
const Produit = useStore((state)=>state.produit)

function redirection(){
   navigateTo(`/coursItem/${produit.id}`);

}

function ActionCart(id){

 let getProduitById = data.find((item)=>item.id===id)
 let isExistProduit = Produit.findIndex((item)=>item.id===id)

 console.log(isExistProduit);
 let TabProduit = Produit
   if(etatBouton==="Add to cart"&&isExistProduit===(-1)){
      setHide(true)
      TabProduit.push(getProduitById)
      updateProduit(TabProduit)
      setEtatBouton("Remove to cart")

   }else{
      setEtatBouton("Add to cart")
      setHide(false)
      let newProduit =TabProduit.filter((item)=>item.id!==id)
      updateProduit(newProduit)
   }
}

   return (
      <div className="card p-0 mb-3 w-auto">
         <img src={produit.img} onClick={redirection} className="card-img-top w-auto" style={{cursor:"pointer"}}
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
               <button onClick={()=>ActionCart(produit.id)} className={`btn ${hide && 'btn-outline-danger'}  ${!hide &&'btn-outline-primary'} border-prymary fw-medium p-2 ms-auto btAdd`}>
                  <i className="fa-solid fa-cart-shopping"></i> {etatBouton}
               </button>
            </div>
         </div>
      </div>
   );
}

export default Card;
