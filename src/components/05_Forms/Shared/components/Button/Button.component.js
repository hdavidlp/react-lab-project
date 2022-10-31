import React from 'react'
import "./Button.styles.css"

//const Button = ({ title, handleClick, isDisabled, className } ) => {
const Button = ({ title, ...props}) => {
  return (
    //<button onClick={handleClick} className={className} disabled={isDisabled}>{title}</button>
    <button {...props} >{title}</button>
  )
}

Button.defaultProps = {
  title: 'Write your Title Here',
  disabled: false,
  className : ""
}

export default Button