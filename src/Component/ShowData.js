import React from 'react'
import './ShowData.css'

const ShowData = (props) => {
  return (
    <div>
        <div>{props.name}</div>
        <div>{props.age}</div>
    </div>
  )
}

export default ShowData