import React from 'react'
import { Link } from 'react-router-dom';
import List from './List'

const Filling = ({ cake, pickFilling }) => {
  const fillings = ['Vanilla', 'Chocolate', 'Cream Cheese', 'Caramel', 'Strawberry Cream']
  console.log(cake)
  return (
    <div>
      <p>Choose a flavor for your filling:</p>
      <List options={fillings} action={pickFilling} cake={cake} cakeKey='filling'/>
      {cake.filling && (
      <Link to="/icing">
        <button>Next</button>
      </Link>
      )}
    </div>
  )
}

export default Filling
