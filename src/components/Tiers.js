import React from 'react'
import { Link } from 'react-router-dom';

const Tiers = () => {
  return (
    <div>
      <p>How many tiers would you like?</p>
      <input type="range" id="slider" name="slider" min="1" max="3"/>
      <Link to="/theme">
        <button>Next</button>
      </Link>
    </div>
  )
}

export default Tiers
