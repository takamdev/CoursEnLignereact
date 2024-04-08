import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { data } from "./../../data.js";
import { Link } from "react-router-dom";
import Timer from "../components/Timer.jsx";
import Footer from "../components/Footer.jsx";
import Modal from "../components/Modals.jsx";
import Modals from "../components/Modals.jsx";

function Boutique() {
   const [email, setEmail] = useState("");
   const [showError, setShowError] = useState(true);
   function mailError(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let valid = regex.test(email);

      if (valid === true) {
         setShowError(true);
         return true;
      } else {
         setShowError(false);
         return false;
      }
   }

   return (
      <section id="boutique" className="container-fluid">
         <article className="banier1Boutique row">
            <div className="col-md-6 col-sm-12 pt-5  align-items-center">
               <p className="text-center display-4 mt-lg-5 fw-bold">
                  Un Large Choix <br /> De Cours
               </p>
               <p className="fs-5 text-center">
                  choisir 213000 videos de cours en ligne avec les mises a jour
                  nouvautés chaque mois
               </p>
               <p className=" mt-5 d-flex justify-content-center">
                  <button
                     type="button"
                     className="btn btn-primary rounded-pill  pt-lg-3 pb-lg-3 ps-lg-3"
                  >
                     Explorez Nos Cours
                  </button>
                  <button
                     type="button"
                     className="btn btn-outline-warning rounded-pill pt-lg-3 ms-3 pb-lg-3 startCourse"
                  >
                     Commencer le cours{" "}
                     <span className="arrows">
                        <i className="fa-solid fa-arrow-right"></i>
                     </span>
                  </button>
               </p>
            </div>
            <div className="col-6 imgBanier d-md-block">
               <img
                  src="./images/baniere.png"
                  alt="image"
                  className="w-100 h-100 "
               />
            </div>
         </article>
         <article className="mt-5 mb-5">
            <p className="text-center">
               <span className="display-5 fw-bold">Featured Courses </span>{" "}
               <br />
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
               aliquid? Lorem ipsum dolor sit amet, consectetur adipisicing
               elit. At, odio!
            </p>
            <div className="row mt-5  justify-content-center align-items-center">
               {data.slice(0, 8).map((item, key) => {
                  return (
                     <div key={key} className="col-lg-3 col-md-6 col-sm-12">
                        <Card produit={item} />
                     </div>
                  );
               })}
               <Link
                  className="btn btn-primary ms-auto me-auto col-lg-2 mt-5 mb-5  rounded-pill"
                  to={"/ListCours"}
                  style={{ height: "60px", paddingTop: "17px" }}
               >
                  Parcouris Tout les cours
               </Link>
            </div>
         </article>
         <article className="mt-5 mb-5">
            <div className="iconeRef1  row">
               <p className="text-center col-sm-6 col-lg-3 mt-sm-5">
                  <i className="fa-solid icon fa-graduation-cap"></i> <br />{" "}
                  <br />
                  <span className=" fw-bold fs-5">
                     <Timer interval={30} stopLimit={2522} /> <br />
                     Apprenants
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3 mt-sm-5">
                  <i className="fa-solid icon fa-certificate"></i>
                  <br /> <br />
                  <span className=" fw-bold fs-5">
                     <Timer interval={30} stopLimit={3611} /> <br />
                     Certifications{" "}
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3 mt-md-5 mt-sm-5">
                  <i className="fa-solid icon fa-user"></i>
                  <br /> <br />
                  <span className=" fw-bold fs-5">
                     <Timer interval={150} stopLimit={119} /> <br />
                     Formateurs
                  </span>
               </p>
               <p className="text-center  col-sm-6 col-lg-3 mt-md-5 mt-sm-5">
                  <i className="fa-solid icon fa-book"></i>
                  <br /> <br />
                  <span className=" fw-bold fs-5">
                     <Timer interval={100} stopLimit={709} /> <br />
                     Cours Publiés
                  </span>
               </p>
            </div>
            <div className="iconeRef2 row  justify-content-center me-5 pe-5 mt-5">
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-brands icon fa-artstation "></i>

                  <span>
                     {" "}
                     <b>Arts & Dessin</b> <br /> 25 Cours
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-solid icon fa-sack-dollar"></i>
                  <span>
                     <b>Finnaces</b>
                     <br />
                     17 Cours
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-solid icon fa-language"></i>
                  <span>
                     <b>Lanques</b>
                     <br />
                     83 Cours
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-solid icon fa-image"></i>
                  <span>
                     <b>Developpement</b>
                     <br />
                     112 Cours
                  </span>
               </p>

               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-brands icon fa-artstation"></i>
                  <span>
                     <b>Photographies</b>
                     <br />
                     25 Cours
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-solid icon fa-sack-dollar"></i>
                  <span>
                     <b>Audio Visuel</b>
                     <br />
                     25 Cours
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-solid icon fa-language"></i>
                  <span>
                     <b>Philosophie</b>
                     <br />7 Cours
                  </span>
               </p>
               <p className="text-center col-sm-6 col-lg-3">
                  <i className="fa-solid icon fa-image"></i>
                  <span>
                     <b>Art Oratoire</b>
                     <br />
                     54 Cours
                  </span>
               </p>
            </div>
         </article>
         <article className="banier2Boutique mb-5 row pe-auto ps-auto">
            <p className="display-6 text-center text-white fw-bold">
               pour avoir les offres spéciales <br /> et les cours actualisés
            </p>
            <form className="form d-flex col-lg-6 mb-5 me-sm-1 ms-lg-auto me-lg-auto">
               <p className={`${showError && "d-none"} icone`}>
                  <i
                     className={`fa-solid fa-circle-exclamation  text-danger`}
                  ></i>
               </p>

               <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value), setShowError(true);
                  }}
                  placeholder="Adress Email"
                  className="form-control"
               />

               <Modals
                  labelButton="enregistrer"
                  validation={mailError}
                  email={email}
               />
            </form>
         </article>
         <Footer />
      </section>
   );
}

export default Boutique;
