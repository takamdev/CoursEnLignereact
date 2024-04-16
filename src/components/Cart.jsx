import React from 'react'
import { useStore } from '../../Store.js'

function Cart(TabProduit) {
    const getListProduit = useStore((state)=>state.produit)
  return (
    <div>Cart</div>
  )
}

export default Cart