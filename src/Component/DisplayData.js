import React from 'react'
import './DisplayData.css'
import ShowData from './ShowData'

const DisplayData = (props) => {

  return (
    <div>{
        props.item.map(
            e =>(
            <ShowData
            name={e.name}
            age={e.age}
            key={e.id} />
        ))
    }
    </div>
  )

}

export default DisplayData