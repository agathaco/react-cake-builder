import React from 'react'
import { Link } from 'react-router-dom';
import List from './List'

const Base = ({ cake, pickBase }) => {
  const bases = ['Vanilla', 'Chocolate', 'Red Velvet', 'Carrot', 'Funfetti']
  console.log(cake.base)
  return (
    <div>
      <p>Choose a flavor for your base:</p>
      <List options={bases} action={pickBase} cake={cake} cakeKey='base'/>
      {cake.base && (
      <Link to="/filling"><button>Next</button></Link>
      )}
    </div>

  )
}

export default Base
