import { create } from 'zustand'

export const useStore = create((set) => {
  const produit = JSON.parse(localStorage.getItem('produit'))|| [];
  return {
    
  produit: produit,
  updateProduit: (Produit) => {
    set(() => ({ produit: [...Produit] }))
    localStorage.setItem("produit",JSON.stringify([...Produit]))
  },
  }
})