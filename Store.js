import { create } from 'zustand'

export const useStore = create((set) => ({
  produit: [],
  updateProduit: (Produit) => set(() => ({ produit: [...Produit] })),
}))