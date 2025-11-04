import React from 'react'
import { useRef } from 'react';

export const UseRefDemo = () => {
    var h1Container=useRef(null);
    var divContainer=useRef(null);
    var formContainer =useRef(null);
    var changeH1=()=>{
        h1Container.current.style.color="red";
        h1Container.current.style.backgroundColor="blue";
    }

    var changeDiv=()=>{
        divContainer.current.style.border="2px solid green";
    }

    var loadData=()=>{
       formContainer.current.children[0].value="abc";
       formContainer.current.children[1].value="pqr";
       formContainer.current.children[2].value="Xyz";
    }
  return (
    <div ref={divContainer} onClick={changeDiv}>
        <h1 ref={h1Container} onClick={changeH1}>Welcome to UseRef Hook</h1>
        <form ref={formContainer} onClick>
            <input type='text' id="first"/>
            <input type="text" id="second"/>
            <input type="text" id ="third"/>
        </form>
        <button onClick={loadData}>Load Data</button>
        
    </div>
  )
}
