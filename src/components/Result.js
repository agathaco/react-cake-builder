import React from 'react'
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <div>
      <p>Your cake is ready!</p>
      <Link to='/'>
        <button>Start over</button>
      </Link>
    </div>
  )
}

export default Result
