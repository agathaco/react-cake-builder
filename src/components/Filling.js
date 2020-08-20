import React from 'react'
import { Link } from 'react-router-dom';


const Filling = () => {
  return (
    <div>
      <p>Choose a flavor for your filling:</p>
      <p>Vanilla</p>
      <p>Chocolate</p>
      <p>Cream Cheese</p>
      <p>Strawberry and Cream</p>
      <Link to="/icing">
        <button>Next</button>
      </Link>
    </div>
  )
}

export default Filling
