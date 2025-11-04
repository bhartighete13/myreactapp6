import React from 'react'
import { useState } from 'react';

export const UseStateData02 = () => {
    var[name,setName]=useState("Soham");
    console.log(name);
    var changeName=()=>{
        setName("Raj");
        console.log(name);
    }
  return (
    <div>
        <h3>{name}</h3>
        <button onClick={changeName}>Change Name</button>

    </div>
  )
}
