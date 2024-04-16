import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { useNavigate  } from 'react-router-dom';
function CoursItem() {
   const { id } = useParams();
   const [hide, setHide] = useState(true);
   const [signe, setSigne] = useState("+");
   const [label, setLabel] = useState("lire plus");
   const [youbLink , setYoubLink] = useState('')
   const navigateTo = useNavigate()
     useEffect(()=>{
      let video = document.querySelector('.videoYoutube').getAttribute("src")
      let indexDeFin = video.lastIndexOf('?')
      let youtubeLink = video.slice(0,indexDeFin).replace('be.com/embed/','.be/').replace('www.','')
       setYoubLink(youtubeLink)
     },[])
   const visible = () => {
      if (hide) {
         setHide(false);
         setSigne("-");
         setLabel("caher");
      } else {
         setHide(true);
         setSigne("+");
         setLabel("lire plus");
      }
   };

   function redirection(){
      navigateTo(`/coursItem/coursItemItem/${id}`)
   }

   function copyToClipboard(){
      let lien = document.querySelector('.link');
      lien.select()
      document.execCommand("copy");
      alert('success')
      
   }
   return (
      <section id="CoursItem" className="container-fluid">
         <p className="text-warning fs-1 ms-0 mt-5">
            <span className="etoile">★</span>
            <span className="etoile">★</span>
            <span className="etoile">★</span>
            <span className="etoile">★</span>
            <span className="etoile">★</span>
            <span className="text-black fs-6">
               {" "}
               <b className=" ms-2 fs-3">{5}</b>{" "}
               <t className="ms-1 fs-3 opacity-50">
                  ({2} {"rating"})
               </t>
            </span>
         </p>
         <p className="ms-0 fs-3 fw-bold">cours complet sur java script</p>

         <div className="categirieLine">
            <p className="fs-5 fw-bold">
               <span className="opacity-50">categorie</span> developpement web
            </p>
            <p className=" fs-5 hstack gap-4">
               <span>
                  <i className="fa-solid fa-bookmark"></i> Whislist
               </span>
               <span style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  {" "}
                  <i className="fa-solid fa-share"></i> Partager
               </span>
            </p>
         </div>
         <article className="mt-3 row">
            <div className="col-sm-12 col-md-9 ">
            <iframe width="100%" height="555" className="videoYoutube" src="https://www.youtube.com/embed/s79WQiJaknc?si=x4-JzndGrpQEPZo1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="col-sm-12 col-md-3 ps-lg-5">
               <p className="fs-4 fw-bold w-100">Progression du Cours</p>
               <div
                  className="progress col-12"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
               >
                  <div
                     className="progress-bar bg-success"
                     style={{ width: "25%" }}
                  >
                     25%
                  </div>
               </div>
              <div className="vstack">
              <button
               onClick={redirection}
                  type="button"
                  className="btn btn-primary col-sm-4 col-lg-12 col-md-12 ps-0 pe-0  pt-2 pb-2 mt-4"
               >
                  Continue d'Apprendre
               </button>
               <button
                  type="button"
                  className="btn btn-outline-primary col-sm-4 col-lg-12 col-md-12 ps-0 pe-0  pt-2 pb-2 mt-4"
               >
                  Cours Complets
               </button>
              </div>
               <div className="mt-3">
                  <p className="opacity-50 fs-5 mb-0">
                     <i className="fa-solid fa-hand"></i>Ce Cours a été
                     enregistrer le
                  </p>
                  <p className="fw-bolder fs-5 fst-italic ">
                     Lundi 06 Mars 2023
                  </p>
               </div>

               <div>
                  <p className="border-2 border-bottom pb-2 fs-5">
                     <i className="fa-solid fa-chart-line"></i> Expert
                  </p>
                  <p className="border-2 border-bottom pb-2 fs-5">
                     <i className="fa-solid fa-tag "></i> 2 Cours Enrollés
                  </p>
                  <p className="border-2 border-bottom pb-2 fs-5">
                     <i className="fa-solid fa-clock "></i> 4 heures de Durée
                  </p>
                  <p className="border-2 border-bottom pb-2 fs-5">
                     <i className="fa-solid fa-arrows-rotate "></i> Actualisé le
                     jeudi 11 Mars 2023
                  </p>
               </div>
            </div>
         </article>
         <article className=" cours row">
            <ul className="nav  mb-3" id="pills-tab" role="tablist">
               <li className="nav-item" role="presentation">
                  <a
                     className="nav-link active"
                     id="pills-home-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-home"
                     role="tab"
                     aria-controls="pills-home"
                     aria-selected="true"
                  >
                     Info Cours
                  </a>
               </li>
               <li className="nav-item" role="presentation">
                  <a
                     className="nav-link"
                     id="pills-profile-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-profile"
                     role="tab"
                     aria-controls="pills-profile"
                     aria-selected="false"
                  >
                     Reviews
                  </a>
               </li>
               <li className="nav-item" role="presentation">
                  <a
                     className="nav-link"
                     id="pills-contact-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-contact"
                     role="tab"
                     aria-controls="pills-contact"
                     aria-selected="false"
                  >
                     Annocement
                  </a>
               </li>
            </ul>
            <div className="tab-content col-lg-9 col-sm-12" id="pills-tabContent">
               <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
               >
                  <p className="fs-5 fw-bold">About Courses</p>

                  <div className="row">
                     <p className="col-12">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto tempora quod ipsam et sint, officiis
                        necessitatibus, dolore tempore possimus hic sit,
                        mollitia maiores deserunt quam molestiae assumenda. Non
                        optio magni doloremque similique eaque nobis, et,
                        perspiciatis accusantium natus debitis corrupti in,
                        mollitia nisi beatae accusamus deserunt aperiam
                        <span className={` ${hide && "text-truncate"} d-block`}>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quia debitis hic architecto obcaecati tempora
                           laborum atque, excepturi nihil aperiam deleniti
                           perferendis reiciendis illo corporis? Praesentium
                           recusandae error cumque nulla dolorum aliquam
                           suscipit doloribus earum dolorem animi architecto
                           odit ducimus, at nemo blanditiis quia neque repellat
                           necessitatibus ratione non aliquid quaerat? Neque
                           asperiores ea illum nisi non inventore in soluta unde
                           fugit. Voluptatem, explicabo porro illum iste
                           nesciunt error accusamus veniam ratione unde sequi
                           quisquam hic, rem, praesentium repudiandae!
                           Recusandae obcaecati deserunt alias magnam quas!
                           Nisi, non sequi beatae facilis vitae nemo autem
                           necessitatibus officiis consectetur, at nostrum
                           iusto, iure quod aperiam accusamus nesciunt
                           exercitationem porro molestiae? Placeat, reiciendis
                           necessitatibus repudiandae, iste vel ex voluptates
                           facere magni minima, quod id! Quos laudantium quod
                           voluptatem eligendi, doloremque, vero laboriosam
                           magni tenetur fuga ipsa asperiores molestias ad
                           recusandae necessitatibus eveniet ex, nam corrupti?
                           Amet ipsum numquam eveniet alias quisquam doloribus
                           nesciunt aperiam temporibus, error omnis dolores
                           magni consectetur asperiores totam quo nam ab
                           corrupti cumque commodi velit impedit iure
                           voluptatibus! Soluta libero quas debitis dolores
                           magnam quae repellat aut nesciunt minima odit
                           voluptatibus, iusto ipsum aspernatur iste beatae
                           dicta distinctio cum pariatur amet facilis ducimus
                           eaque ab assumenda fugiat. Illo impedit sit
                           provident, quo ipsam molestias voluptatem omnis animi
                           recusandae molestiae velit nobis consequuntur itaque
                           minima ipsa exercitationem ad modi quis totam id
                           maxime harum earum! Natus modi aperiam dolorum ullam,
                           optio expedita blanditiis cupiditate nostrum tempore
                           veniam earum! Officia consequuntur voluptatem quis
                           vero. Itaque fugit soluta quo voluptas, ratione
                           tempora neque adipisci pariatur et, rem sapiente
                           rerum deleniti minus maxime quis autem tempore, saepe
                           commodi perspiciatis suscipit dolorum voluptate odio
                           voluptatibus ex. Vero quas consequatur est
                           voluptatibus quisquam dolor tempora quibusdam amet
                           rem culpa impedit eveniet placeat, eum voluptatem
                           molestias laboriosam, deserunt quia non voluptate.
                           Quam quod repudiandae excepturi aspernatur,
                           recusandae sapiente vel consequuntur dicta sunt quae
                           illum eveniet totam, eligendi fugit debitis atque.
                           Aliquam tempora cum inventore sit nisi quibusdam
                           architecto ratione quidem necessitatibus quas! Sunt
                           dolorum laboriosam excepturi id, ea ducimus accusamus
                           possimus magni adipisci laborum quaerat fuga optio
                           aut, sed recusandae minus tempora ad aliquam non
                           ipsum facilis illum. Dolore id cumque ratione, hic
                           autem, repellendus vitae quam molestiae suscipit
                           consequuntur quasi ad ipsum amet non culpa alias?
                           Magnam, nemo! Provident voluptatibus recusandae vero
                           laboriosam facere molestiae. Dolor accusamus
                           praesentium aliquam placeat dolores obcaecati
                           voluptatibus iure nulla. Qui nostrum repellendus
                           quaerat omnis, eum ratione praesentium libero quis
                           molestias, similique corrupti excepturi natus quia
                           tempora aperiam nesciunt, eius aliquam consequuntur
                           porro fugiat harum voluptatibus! Aut earum atque modi
                           dolor at laborum quisquam, doloremque exercitationem,
                           sunt beatae unde! Dolore autem velit minus ipsam,
                           consequatur dolorem amet enim tempora laborum
                           reiciendis reprehenderit nobis magni nulla voluptate
                           iure voluptatibus deserunt facere? Deserunt
                           doloribus, temporibus in iste nobis voluptas quia
                           labore neque et facere totam placeat ipsam quisquam
                           dolor repudiandae voluptates mollitia, deleniti non.
                           Veritatis perspiciatis laborum mollitia eum
                           doloremque ipsa saepe numquam, voluptates tempore, ad
                           alias dignissimos rem error? Assumenda, quia? Nam non
                           natus quam dolore, dolor delectus deleniti, voluptas
                           assumenda omnis ut magni maiores, similique
                           laudantium inventore. Veniam iste optio tempora quo
                           reprehenderit ex numquam placeat ipsa natus,
                           voluptates ducimus qui officia similique earum? Ut
                           culpa harum voluptates itaque ipsa adipisci, tempore
                           laudantium rem at molestias repudiandae voluptas esse
                           corporis qui eum totam atque cum nesciunt aspernatur
                        </span>
                     </p>
                     <button
                        onClick={visible}
                        className="btn border-secondary rounded-pill w-auto"
                     >
                        {" "}
                        {signe} {label}
                     </button>
                  </div>

                  <p className="fs-5 fw-bold mt-3">
                     Qu'es ce que vous allez apprendre
                  </p>
                  <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                           <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Doloribus expedita mole{" "}
                           </li>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                        </ul>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                           <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Similique voluptate rerum{" "}
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
               >
                  <p className="display-6 fw-bold">
                     Vote et Reviews des etudiants
                  </p>
                  <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="ms-5 mt-5 text-warning fs-1">
                           <span className="display-2 ms-4 fw-bold text-black">
                              4.5
                           </span>{" "}
                           <br />
                           <span className="etoile">★</span>
                           <span className="etoile">★</span>
                           <span className="etoile">★</span>
                           <span className="etoile">★</span>
                           <span className="etoile">★</span>
                           <span className="text-black fs-5 mt-0 ms-1 pt-0 d-block">
                              total 2 votes
                           </span>
                        </p>
                        <button className="ms-5 w-auto btn btn-primary fs-5">
                           ★ donner une note
                        </button>
                     </div>

                     <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="fs-5 mt-5">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Perspiciatis ipsum cupiditate nesciunt libero,
                           officia esse. sit amet consectetur adipisicing elit.
                           Perspiciati s ipsum cupiditate nesciunt sit amet
                           consectetur adipisicing elit . Perspiciatis ipsum
                           cupiditate nesciunt
                        </p>
                     </div>
                  </div>
               </div>
               <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex="0"
               >
                 <p className="display-2 fw-bold">Aucune Donnée dans cette section pour le moment!!</p>
               </div>
               <div
                  className="tab-pane fade"
                  id="pills-disabled"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab"
                  tabIndex="0"
               ></div>
            </div>
            <div className="col-lg-3 col-sm-12">
               <p className="fs-5 border-bottom bg-body-secondary pt-2 pb-2 ps-3">
                  Proposer pas <b>Takam Loic Junior</b>
               </p>
               <p className="fs-5 fw-bold">Materiel Inclu</p>
               <ul style={{ listStyle: "circle" }}>
                  <li className="fs-6 fw-semibold opacity-75">4h de Cours</li>
                  <li className="fs-6 fw-semibold opacity-75">4 Articles</li>
                  <li className="fs-6 fw-semibold opacity-75">
                     3 Telechargemnet Inclu
                  </li>
                  <li className="fs-6 fw-semibold opacity-75">
                     Certification a la fin
                  </li>
               </ul>

               <p className="fs-5 fw-bold border-top pt-3">Prerequis</p>
               <ul style={{ listStyle: "circle" }}>
                  <li className="fs-6 fw-semibold opacity-75">Un Ordinateur</li>
                  <li className="fs-6 fw-semibold opacity-75">
                     Une Bonne Connexion Internet
                  </li>
               </ul>
            </div>
         </article>
         {/*  ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

         <p className="fs-5 fw-bold mt-5">Contenu du cours</p>

         <div className="accordion col-lg-10" id="accordionExample">
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
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon> Introduction cours JavaScript</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">03:00 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Code source et éditeur</p>
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
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Enoncé exercice 2: chaine , fonctions, opérateurs</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">02:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>L'importance,ou pas, de l'ordre du code</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">17:40 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Introduction aux evernements</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">23:40 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Exercice 3:Corrigé</p>
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
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Les objectifs et paramètres par defaut</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">12:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Spread et Destructuring</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Les templates litterals</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Enoncé exercice 7</p>
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
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Les objets et les parametres par defaut</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">12:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Spread et Destructuring</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Les "Template litterals"</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">18:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                     <div className="hstack align-items-center">
                        <p className="fs-5 d-flex align-items-center gap-1"> <box-icon className="mt-2" type='solid' name='video'></box-icon>Enoncé exercice 7</p>
                        <p className="fs-5 d-flex align-items-center gap-1 ms-auto">48:10 <box-icon type='solid' name='bullseye'></box-icon></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/*  */}
         <Footer />
         
         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
         <div className="modal-content bg-dark text-white">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Partager</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="text-center">
               <div className="row  mt-3 mb-3 container-fluid">
                  <p className="col">
                  <i style={{transform:"scale(3)"}}  className="fa-solid fa-code mb-3"></i>
                  Integrer
                  </p>
                  <p className="col">
                  <i style={{transform:"scale(3)"}} className="fa-brands fa-whatsapp  mb-3"></i>
                  Whatsapp
                  </p>
                  <p className="col ">
                  <i style={{transform:"scale(3)"}} className="fa-brands fa-facebook  mb-3"></i>
                  Facebook
                  </p>
                  <p className="col position-relative">
                  <i style={{transform:"scale(3)"}} className="fa-brands fa-x-twitter"></i>
                  <span className="position-absolute" style={{right:"35px",bottom:"0",transform:"scale(1.3)"}}>X</span>        
                  </p>
                  <p className="col position-relative">
                  <i style={{transform:"scale(3)"}} className="fa-solid fa-envelope"></i>
                  <span className="position-absolute" style={{right:"20px",bottom:"0"}}>Email</span>           
                  </p>
               </div>
            </div>

            <div className="row">
            <div className="col-8 ms-2">
            <input className="form-control link" value={youbLink} type="text"/>
            </div>
               <button className="btn btn-primary col-2 ms-auto me-4" onClick={()=>{copyToClipboard()}}>copier</button>
            </div>
            </div>
         
         </div>
      </div>
      </div>
   </section>
   );
}

export default CoursItem;
