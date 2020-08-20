import React from 'react'
import { Link } from 'react-router-dom';

const Icing = () => {
  return (
    <div>
      <p>How much icing would you like?</p>
      <input type="range" id="slider" name="slider" min="0" max="10"/>
      <Link to="/tiers">
        <button>Next</button>
      </Link>
    </div>
  )
}

export default Icing
