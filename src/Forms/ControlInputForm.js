import React from 'react'
import { useState } from 'react';
export const ControlInputForm = () => {
    var[uname,setUname]=useState("");
    var[uemail,setUemail]=useState("");
    var[uage,setUage]=useState("");
    var[people,setPeople]=useState([]);

    var changeName=(event)=>{
        setUname(event.target.value);
    }

    var changeEmail=(event)=>{
        setUemail(event.target.value);
    }

    var changeAge=(event)=>{
        setUage(event.target.value);
    }
    var handleSubmit=(event)=>{
            event.preventDefault();
            if(uname&&uemail&&uage)
            {
            var person= {uname,uemail,uage};
            setPeople((p)=>{return [...p,person]});
            setUname("");
            setUemail("");
            setUage("");
            }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input type="text" id="uname" onChange={changeName} value={uname}/><br/>
            <label>User Email</label>
            <input type="email" id="uemail" onChange={changeEmail} value={uemail}/><br/>
            <label>User age</label>
            <input type="number" id="uage" onChange={changeAge} value={uage}/><br/>

            <input type="submit" value="Submit"/>
            
        </form>
        <h3>{uname}----{uemail}---{uage}</h3>
        {people.map((person)=>{
            return (<div style={{color:"blue"}}><h2>{person.uname}--{person.uemail}--{person.uage}</h2></div>)
        })}
    </div>
  )
}
