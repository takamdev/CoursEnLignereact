import React, { useState } from "react";
import { data } from "../../data.js";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
function ListCours() {
 
  const [dataFilter,setDataFilter] = useState(data)
function filterData(cathegorie){
   if(cathegorie ===""){
    setDataFilter(data)
   }else{
    let   filterResul = data.filter((item)=>{

      return item.categorie.toUpperCase()===cathegorie.toUpperCase()
    })
    setDataFilter(filterResul)
   }


 
 

}
   return (
      <section id="ListCours" className="container-fluid">
         <div className="banier1ListCours  d-flex justify-content-center align-items-end mb-5">
            <p className="display-4 text-white fw-bold">Cours</p>
         </div>
         <select  className="form-select w-25" aria-label="Default select example" onChange={(e)=>{filterData(e.target.value)}} >
            <option value="">Toutes les cathegories</option>
            <option value="infographie">infographie</option> 
            <option value="Reseau Informatique">Reseau Informatique</option>
            <option value="Contabilité et Gestion">Contabilité et Gestion</option>
            <option value="Programmation Informatique">Programmation Informatique</option> 
         </select>
         <article className="row mt-5  justify-content-center align-items-center">
            {dataFilter.map((item, key) => {
               return (
                  <div key={key} className="col-lg-3 col-md-4 col-sm-12">
                     <Card produit={item} />
                  </div>
               );
            })}
         </article>
         <Footer/>
      </section>
   );
}

export default ListCours;
