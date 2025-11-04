import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Login = ({setUser}) => {
    var[fname,setFname]=useState('');
    var[mail,setMail]=useState('');
    var go=useNavigate();

    var  getFname=(event)=>{
        setFname(event.target.value);
    }

    var  getMail=(event)=>{
        setMail(event.target.value);
    }
    var handleSubmit=(event)=>{
        event.preventDefault();
        if(fname && mail)
        {
            setUser({fname,mail});
            go('/dashboard'); 
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name={fname} onChange={getFname}/> <br/><br/>
            <label>Email</label>
            <input type="email" name={mail} onChange={getMail}/> <br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

