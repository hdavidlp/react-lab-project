import React from 'react'
import PropTypes from 'prop-types'

function WelcomeMessage(props) {
  return (
    <div>
      Welcome Message :
      {props.text}  {props.myParameter}
    </div>
  )
}

const WelcomeMessageAlternative=({ param1, param2 })=> {
  return (
    <div>
      Welcome Message :
      {param1}  {param2}
    </div>
  )
}

const WelcomeMessageDestructing=({name, ...props })=> {
  return (
    <div {...props}>
      Welcome Message :
      {name}   
    </div>
  )
}


// This section is used to assign default parameters values
WelcomeMessage.defaultProps = {
  text: 'Param Text not present',
  myParameter: 'myParameter not Present'
}


// This section prevents to assign values from other data types
WelcomeMessage.propTypes = {
  text : PropTypes.string.isRequired,
  myParameter : PropTypes.string
}

export default WelcomeMessage
export {WelcomeMessageAlternative, WelcomeMessageDestructing}



/* 
Notes:
+ Easy way to recive a prop : WelcomeMessage(props), to use {props.text}  {props.myParameter}
+ Another way : functionMane =({ param1, param2 })=>, to use {param1}  {param2}
+ Destructing way : functionDestructing=({name, ...props })=>, to use <div {...props}>

To assign default parameters value use : WelcomeMessage.defaultProps = {text: 'Param Text not present'}
To define types and prevent other values: WelcomeMessage.propTypes = {text : PropTypes.string.isRequired}


*/
