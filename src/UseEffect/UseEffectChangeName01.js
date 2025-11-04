import React, { useEffect } from 'react'
import { useState } from 'react';

export const UseEffectChangeName01 = () => {
    var[name,setName]=useState("Soham");
    var changeName=()=>{
        setName("Raj");
    }
    // useEffect(()=>{
    //     alert("Good Afternoon All");
    // })  

     useEffect(()=>{
        alert("Good Afternoon All");
    },[])
  return (
    <div>
        <h3>{name}</h3>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}
