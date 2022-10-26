import React from 'react'

function HeaderSection({name, smallDescription}) {
  return (
    <div >
      <h2>{name}</h2>
      <p>{smallDescription}</p>
    </div>
    
  )
}

export default HeaderSection