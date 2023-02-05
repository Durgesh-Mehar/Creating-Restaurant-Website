import React from 'react'
import classses from './Input.module.css'
const Input = (props) => {
  return (
    <div className={ classses.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  )
}

export default Input
