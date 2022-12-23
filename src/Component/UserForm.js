import React, { useState } from 'react'
import './UserForm.css'

const UserForm = (props) => {

    const [enteredName,SetenteredName]=useState('');
    const [enteredAge,SetenteredAge]=useState('')

    const enteredNameHandler=(e)=>{
        SetenteredName(e.target.value);
    }

    const enteredAgeHandler=(e)=>{
        SetenteredAge(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const data1={
            name:enteredName,
            age:enteredAge,
            id:Math.random().toString()
        }
        props.addToUserList(data1)
        console.log(data1);
        SetenteredName('');
SetenteredAge('');

    }


  return (
    <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type='text' value={enteredName} onChange={enteredNameHandler}></input>
        <label>Age</label>
        <input type='number' value={enteredAge} onChange={enteredAgeHandler}></input>
        <button type='submit'>Save</button>
    </form>
  )
}

export default UserForm