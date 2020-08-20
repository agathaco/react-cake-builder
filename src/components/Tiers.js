import React from 'react'
import { Link } from 'react-router-dom';

const Tiers = ({ cake, pickTiers }) => {
  console.log(cake)
  return (
    <div>
      <p>How many tiers would you like?</p>
      <input type="range" defaultValue="1" id="slider" name="slider" min="1" max="3" step="1" onChange={value => pickTiers(value.target.value)}/>
      {cake.tiers && (
      <Link to="/theme">
        <button>Next</button>
      </Link>
      )}
    </div>
  )
}

export default Tiers
