import { create } from 'zustand'

export const useStore = create((set) => {
  const produit = JSON.parse(localStorage.getItem('produit'))|| [];
  return {
    
  produit: produit,
  updateProduit: (Produit) => {
    set(() => ({ produit: [...Produit] }))
    localStorage.setItem("produit",JSON.stringify([...Produit]))
  },
  addProduit:(produit)=>{
     set((state) => {
        localStorage.setItem("produit",JSON.stringify([...state.produit,{...produit,qte:1}]))
      return { produit: [...state.produit,{...produit,qte:1}] }
     })
  }
  }
})