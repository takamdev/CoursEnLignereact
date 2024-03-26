import React from "react";
import { data } from "../../data.js";
import Footer from "../components/Footer.jsx";
let formateur = [1, 2, 3, 4, 5, 6, 7, 8];
function Formateur() {
   return (
      <section id="formateurs" className="container-fluid">
         <div className="banier1Formateurs  d-flex justify-content-center align-items-end mb-5">
            <p className="display-4 text-white fw-bold">Nos Formateurs</p>
         </div>
         <div className="row mt-auto mb-5">
            {formateur.map((item) => {
               return (
                  <div key={item} className="col-lg-3 col-md-6 col-sm-12">
                     <div className="card p-0 mb-3 w-auto">
                     <img src="/images/06.jpg" className="card-img-top w-auto"  alt="image" />
                     <p className="mt-3 ms-3 ">
                        <span className="fw-bold">Leon Wabo</span> <br /> Dev
                        Web
                     </p>
                     </div>
                  </div>
               );
            })}
         </div>
         <div className="banier2Formateurs row justify-content-center align-items-center mb-5 ps-3 pe-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
               <p className="display-5 fw-bolder">Devenir un Formateur</p>
               <p style={{fontSize:"15px"}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate consectetur, et quas nobis, rem exercitationem quod
                  incidunt molestiae reprehenderit aliquam omnis sunt maxime
                  cum minus reprehenderit dicta ipsum saepe fugiat beatae.
               </p>
               <button className="btn btn-primary rounded-pill col-10">Devenir un Formateur</button>
            </div>
            <img
               className="col-lg-6 col-md-6"
               height={300}
               src="/images/babbaab.png"
               alt="image"
            />
         </div>
         <Footer />
      </section>
   );
}

export default Formateur;
