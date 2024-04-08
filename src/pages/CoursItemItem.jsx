import React from 'react'

function CoursItemItem() {
  return (
   <section id='coursItemItem' className='container-fluid'>
    <article className='row mt-3 h-auto'>
    <p className="fs-5 fw-bolder">contenur du cours</p>
     <div className="col-4 m-0 p-0">
        
        <div className="accordion col-lg-12" id="accordionExample">
            <div className="accordion-item">
               <h2 className="accordion-header">
                  <button
                     className="accordion-button"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseOne"
                     aria-expanded="false"
                     aria-controls="collapseOne"
                  >
                     Introduction
                  </button>
               </h2>
               <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
               >
                  <div className="accordion-body">
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon> Introduction cours JavaScript</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">03:00 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Code source et éditeur</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">17:30 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                
                  </div>
               </div>
            </div>
            <div className="accordion-item">
               <h2 className="accordion-header">
                  <button
                     className="accordion-button collapsed"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseTwo"
                     aria-expanded="false"
                     aria-controls="collapseTwo"
                  >
                     javaScript,les bases
                  </button>
               </h2>
               <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
               >
                  <div className="accordion-body">
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Enoncé exercice 2: chaine , fonctions, opérateurs</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">02:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>L'importance,ou pas, de l'ordre du code</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">17:40 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Introduction aux evernements</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">23:40 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Exercice 3:Corrigé</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">13:40 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="accordion-item">
               <h2 className="accordion-header">
                  <button
                     className="accordion-button collapsed"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseThree"
                     aria-expanded="false"
                     aria-controls="collapseThree"
                  >
                     javaScript moderne ES6/7/etc
                  </button>
               </h2>
               <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
               >
                  <div className="accordion-body">
                    <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Les objectifs et paramètres par defaut</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">12:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon type='solid' name='video'></box-icon>Spread et Destructuring</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Les templates litterals</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Enoncé exercice 7</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">48:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="accordion-item">
               <h2 className="accordion-header">
                  <button
                     className="accordion-button collapsed"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseFour"
                     aria-expanded="false"
                     aria-controls="collapseFour"
                  >
                     javaScript Asynchrone
                  </button>
               </h2>
               <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
               >
                  <div className="accordion-body">
                  <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Les objets et les parametres par defaut</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">12:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Spread et Destructuring</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Les "Template litterals"</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon  type='solid' name='video'></box-icon>Enoncé exercice 7</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">48:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
     </div>
     <div className="col-8 m-0">

     <iframe width="100%" height="555" className="videoYoutube" src="https://www.youtube.com/embed/s79WQiJaknc?si=x4-JzndGrpQEPZo1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

     </div>
    </article>
   </section>
  )
}

export default CoursItemItem