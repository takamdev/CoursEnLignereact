import React from "react";

function Boutique() {
   return (
      <section id="boutique" className="container-fluid">
         <div className="banier row">
            <div className="col-md-6 col-sm-12 row ms-auto align-items-center">
               <p className=" mb-0 pb-0">
                  <span className="display-4 fw-bold">
                     {" "}
                     Un Large Choix <br /> De Cours
                  </span>
                  <br />
                  <span className="fs-4">
                     choisir 213000 videos de cours en ligne avec les mises a
                     jour nouvautés chaque mois
                  </span> <br />
                  <button type="button" className="btn btn-primary rounded-pill pt-3 pb-3 ps-3">Explorez Nos Cours</button>
                  <button type="button" className="btn btn-outline-warning rounded-pill pt-3 pb-3 startCourse">Commencer le cours <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span></button>
               </p>
            </div>
            <div className="col-6  d-sm-none d-md-block">
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
