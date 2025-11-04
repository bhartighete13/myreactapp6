import React from 'react'
export const UseStateData01 = () => {
    var name="Soham";
    var changeName=()=>{
        console.log(name);//soham
        name="Raj";
        console.log(name);//Raj
    }
  return (
    <div>
        <h4>{name}</h4>
        <button onClick={changeName}>Change Name</button>

    </div>
  )
}
