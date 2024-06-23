import { useEffect, useState } from 'react';
import { useStore } from '../../Store.js'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';

function Cart() {
    const getListProduit = useStore((state)=>state.produit)
    const updateProduit = useStore((state)=>state.updateProduit)
    const produit = useStore((state)=>state.produit)




    const addQte = (id)=>{
      const newList = getListProduit.map(item=>{
            if(item.id ===id){
               if (item.qte>4) {
                  toast.warning("limite atteint!",{
                     className:"text-danger"
                  })
                  return {...item,qte:item.qte}
               }else{
                  return {...item,qte:item.qte+1}
               }
                
            }else{
               return item
            } 
      })
      updateProduit(newList)
     


    }
    
    const removeQte = (id)=>{
      const newList = getListProduit.map(item=>{
         if(item.id ===id){
            if (item.qte===1) {
               return {...item,qte:item.qte}
            }else{
               return {...item,qte:item.qte-1}
            }
             
         }else{
            return item
         } 
   })
   updateProduit(newList)
    }
    const delPro = (id)=>{
    let newList=  getListProduit.filter(item=>item.id!==id)
    updateProduit(newList)
    }

    const commande = ()=>{
     toast.success("commande reussir!",{className:"text-primary fs-6"})
     updateProduit([])
    }
  return (
    <div className="row d-flex justify-content-center mt-3">
               <div className="col">
                  <div className="row">
                  <p className="col-8 fs-3">Total:{
                   produit.reduce((some,item)=>{
                     const prix = item.prix.replace("$","")
                     return some+(item.qte*prix)
                    },0)
                     }</p>
                  <button className='btn btn-primary col-4 h-25' onClick={commande}>Commander</button>
                  </div>
                   
                  <div className="table-responsive">
                     <table className="table">
                        <thead>
                           <tr>
                              <th scope="col">Nom</th>
                              <th scope="col">Prix</th>
                              <th scope="col">Category</th>
                              <th scope="col">Image</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {getListProduit.map((item, index) => {
                              return (
                                 <tr key={index}>
                                    <th scope="row">{item.descCours}</th>
                                    <td>{item.prix}</td>
                                    <td>{item.categorie}</td>
                                    <td>
                                       <img
                                          src={`${item.img}`}
                                          alt="image"
                                          width={60}
                                          height={60}
                                          className="rounded-circle"
                                       />
                                    </td>
                                    <td>
                                       <div className="hstack gap-1 mt-2">
                                          <button
                                             className="btn btn-primary"
                                             onClick={() => addQte(item.id)}
                                          >
                                             <FaPlus />
                                          </button>
                                          <div>{item.qte}</div>
                                          <button
                                             className="btn btn-info"
                                             onClick={() => removeQte(item.id)}
                                          >
                                             <FaMinus />
                                          </button>
                                       </div>
                                    </td>
                                    <td>
                                       <button
                                          className="btn btn-danger mt-2"
                                          onClick={() => delPro(item.id)}
                                       >
                                          <FaTrash />
                                       </button>
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>

                 
               </div>
            </div>
  )
}

export default Cart