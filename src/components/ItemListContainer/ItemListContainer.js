import React from 'react'
import "./Style.css"
import { greeting } from './Var'

const ItemListContainer = () => {
  return (
          <h3 className="text-light text">{greeting}</h3>
  )
}

export default ItemListContainer