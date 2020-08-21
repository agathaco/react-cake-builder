import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <h1>Welcome to the Cake Builder</h1>
    <Link to="/base">
      <button>
        Make a Cake!
      </button>
    </Link>
    </div>
  )
}

export default Home
