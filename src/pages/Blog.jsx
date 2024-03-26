import React from "react";

function Blog() {
   return (
      <section id="blog" className="container-fluid mt-5 pt-5">
         <p className="display-6 text-center">
            {" "}
            Forum <span className="fw-bold">3</span> Message
         </p>
         <div className="row mt-5">
            <form className="col-lg-6 col-sm-12">
               <input type="text" className="form-control" />
               <div className="hstack justify-content-end mt-3">
                  <button className="btn btn-primary">Envoyer</button>
               </div>
            </form>
            <div className="message col-lg-6 col-sm-12 mt-sm-3 mt-lg-0 mt-md-0 lh-lg">
             <p className="ps-2 fs-5 opacity-75">une très bon site pour apprendre</p>
             <p className="ps-2 fs-5 opacity-75">suis très satisfait</p>
             <p className="ps-2 fs-5 opacity-75">ce très bien</p>
            </div>
         </div>
      </section>
   );
}

export default Blog;
