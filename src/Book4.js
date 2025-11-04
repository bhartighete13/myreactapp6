import React from 'react'

export const Book4=(props)=>{
    var {title,imgpath,author,gnere}=props; //object destructuring
    return (<div className='book'>
            <h2>{title}</h2>
            <img src={imgpath} alt="not fond" width="200px" height="200px"></img>
            <h3>{author}</h3>
            <h3>{gnere}</h3>
    </div>)
}
