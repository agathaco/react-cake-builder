import React from 'react'
import { Link } from 'react-router-dom';


const Base = () => {
  return (
    <div>
      <p>Choose a flavor for your base:</p>
      <p>Vanilla</p>
      <p>Chocolate</p>
      <p>Red Velvet</p>
      <p>Funfetti</p>
      <Link to="/filling"><button>Next</button></Link>
     
    </div>
  )
}

export default Base
