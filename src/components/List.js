import React from 'react'

const List = (props) => {
  return (
    <ul className="list">
      {props.options.map((option, index) => {
        const itemClass = props.cake[props.cakeKey] === option ? 'active' : '';
        return (
          <li key={index} onClick={() => props.action(option)} className={itemClass}>{option}</li>
        )
      })}
    </ul>
  )
}

export default List
