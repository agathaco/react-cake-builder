import React from 'react'
import { Link } from 'react-router-dom';


const Theme = ({ cake, pickTheme }) => {
  console.log(cake)
  const themes = ["Birthday", "Wedding", "Floral", "Fruity", "No theme"]
  return (
    <div>
      <p>Choose a theme</p>
      <ul>
        {themes.map((theme, index) => {
          return (
            <li key={index} onClick={() => pickTheme(theme)}>{theme}</li>
          )
        })}
      </ul>
      {cake.theme && (
      <Link to="/result">
        <button>Next</button>
      </Link>
      )}

    </div>
  )
}

export default Theme
