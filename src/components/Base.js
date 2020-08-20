import React from 'react'
import { Link } from 'react-router-dom';

const Base = ({ cake, pickBase }) => {
  const bases = ['Vanilla', 'Chocolate', 'Red Velvet', 'Carrot', 'Funfetti']
  console.log(cake)
  return (
    <div>
      <p>Choose a flavor for your base:</p>
      <ul>
        {bases.map((base, index) => {
          return (
            <li key={index} onClick={() => pickBase(base)}>{base}</li>
          )
        })}
      </ul>
      {cake.base && (
      <Link to="/filling"><button>Next</button></Link>
      )}
    </div>

  )
}

export default Base
