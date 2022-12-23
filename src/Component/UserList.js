import React, { useState } from 'react'
import DisplayData from './DisplayData'
import UserForm from './UserForm'

let Dummy=[]

const UserList = () => {

  const [data1,setData1]=useState(Dummy)

    const AddDataHandler=(fromForm)=>{
        const totalData=[
          fromForm,...data1
        ]
        setData1(totalData)
        console.log('data1',totalData);
    }

  return (
    <div>
        <UserForm addToUserList={AddDataHandler}/>
        <DisplayData item={data1} />
    </div>
  )
}

export default UserList 