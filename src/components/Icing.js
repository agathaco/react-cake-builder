import React from 'react'
import { Link } from 'react-router-dom';

const Icing = ({ cake, pickIcing }) => {
  console.log(cake)
  return (
    <div>
      <p>How much icing would you like?</p>
      <input type="range" defaultValue="5" id="slider" name="slider" min="0" max="10"  onChange={value => pickIcing(value.target.value)}/>
      {cake.icing && (
      <Link to="/tiers">
        <button>Next</button>
      </Link>
      )}
    </div>
  )
}

export default Icing
