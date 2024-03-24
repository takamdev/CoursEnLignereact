import React from "react";

function Boutique() {
   return (
      <section id="boutique" className="container-fluid">
         <div className="banier row">
            <div className="col-md-6 col-sm-12 pt-5  align-items-center">
               <p className="text-center display-4 mt-lg-5 fw-bold">
               Un Large Choix <br /> De Cours
               </p>
               <p className="fs-5 text-center">
                     choisir 213000 videos de cours en ligne avec les mises a
                     jour nouvautés chaque mois
                  </p>
               <p className=" mt-5 d-flex justify-content-center">
               <button type="button" className="btn btn-primary rounded-pill  pt-lg-3 pb-lg-3 ps-lg-3">Explorez Nos Cours</button>
                  <button type="button" className="btn btn-outline-warning rounded-pill pt-lg-3 ms-3 pb-lg-3 startCourse">Commencer le cours <span className="arrows"><i className="fa-solid fa-arrow-right"></i></span></button>
               </p>
            </div>
            <div className="col-6 imgBanier d-md-block">
               <img
                  src="./images/baniere.png"
                  alt="image"
                  className="w-100 h-100 "
               />
            </div>
         </div>
      </section>
   );
}

export default Boutique;
