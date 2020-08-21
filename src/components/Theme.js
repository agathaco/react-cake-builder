import React from 'react'
import { Link } from 'react-router-dom';
import List from './List'

const Theme = ({ cake, pickTheme }) => {
  console.log(cake)
  const themes = ["Birthday", "Wedding", "Floral", "Fruity", "No theme"]
  return (
    <div>
      <p>Choose a theme</p>
      <List options={themes} action={pickTheme} cake={cake} cakeKey='theme'/>
      {cake.theme && (
      <Link to="/result">
        <button>Next</button>
      </Link>
      )}

    </div>
  )
}

export default Theme
