import React, { useState } from "react";

function Blog() {
 const [comment , setCommnet] = useState("")
 const [listComment ,setList]=useState([])
 const [yes ,setYes] = useState(true)
 const [nMess , setNMess]= useState(3)
 let key=0;
 const updateComment=()=>{
   key= key+1
   if(comment.replaceAll(" ","")===""){
      setYes(false)
   }else{
      setList(v=>[...v , <p className="ps-2 fs-5 opacity-75" key={key}>{comment}</p>])
      setNMess(v=>v+1)
   }
  
 }
   return (
      <section id="blog" className="container-fluid mt-5 pt-5">
         <p className="display-6 text-center">
            {" "}
            Forum <span className="fw-bold">{nMess}</span> Message
         </p>
         <div className="row mt-5">
            <div className="col-lg-6 col-sm-12 lh-sm">
            <p className={`text-danger ${yes && 'd-none'}`} >entrez un message</p>
               <textarea type="text" className="form-control" rows={5} value={comment} onChange={(e)=>{setCommnet(e.target.value) ,setYes(true)}}></textarea>
               <div className="hstack justify-content-end mt-3">
                  <button type="button" className="btn btn-primary" onClick={updateComment}><i className="fa-solid fa-share"></i> Envoyer</button>
               </div>
            </div>
            <div className="message col-lg-6 col-sm-12 mt-sm-3 mt-lg-0 mt-md-0 lh-lg">
             <p className="ps-2 fs-5 opacity-75">une très bon site pour apprendre</p>
             <p className="ps-2 fs-5 opacity-75">suis très satisfait</p>
             <p className="ps-2 fs-5 opacity-75">ce très bien</p>
             {
               listComment
             }
            </div>
         </div>


      </section>
   );
}

export default Blog;
