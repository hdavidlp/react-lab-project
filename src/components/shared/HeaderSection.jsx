import React from 'react'
import PropTypes from 'prop-types'

function HeaderSection({name, smallDescription}) {
  return (
    <div >
      <h2>{name}</h2>
      <p>{smallDescription}</p>
    </div>
    
  )
}

HeaderSection.defaultProps = {
  name : 'No name jet',
  smallDescription : 'Use smallDescription prop to update this message'
}

HeaderSection.propTypes = {
  name : PropTypes.string,
  smallDescription : PropTypes.string
}

export default HeaderSection