import React from 'react'
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <div>
      <p>Your cake is ready!</p>
      <Link to='/'>
        <button>Make a new cake</button>
      </Link>
    </div>
  )
}

export default Result
