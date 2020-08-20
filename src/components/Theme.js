import React from 'react'
import { Link } from 'react-router-dom';


const Theme = () => {
  return (
    <div>
      <p>Choose a theme</p>
      <p>Wedding</p>
      <p>Floral</p>
      <p>Birthday</p>
      <p>No theme</p>
      <Link to="/result">
        <button>Next</button>
      </Link>

    </div>
  )
}

export default Theme
