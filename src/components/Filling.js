import React from 'react'
import { Link } from 'react-router-dom';

const Filling = ({ cake, pickFilling }) => {
  const fillings = ['Vanilla', 'Chocolate', 'Cream Cheese', 'Caramel', 'Strawberry Cream']
  console.log(cake)
  return (
    <div>
      <p>Choose a flavor for your filling:</p>
      <ul>
        {fillings.map((filling, index) => {
          return (
            <li key={index} onClick={() => pickFilling(filling)}>{filling}</li>
          )
        })}
      </ul>
      {cake.filling && (
      <Link to="/icing">
        <button>Next</button>
      </Link>
      )}
    </div>
  )
}

export default Filling
