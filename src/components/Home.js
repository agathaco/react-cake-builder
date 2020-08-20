import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    Welcome to the Cake Builder
    <Link to="/base">
      <button>
        Build your Cake
      </button>
    </Link>
    </div>
  )
}

export default Home
