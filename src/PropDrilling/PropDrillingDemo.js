import React from 'react'
import {bookinfo} from '../bookinfo';
import { useState } from 'react';

export const PropDrillingDemo = () => {
    var[books,setBooks]=useState(bookinfo);
    var removeBook=(id)=>{
      var remainingBooks= books.filter((book)=>{
            return book.id!==id;
        })
        setBooks(remainingBooks);
    }
return (<div>
            <List books={books} removeBook={removeBook}></List>
        </div>)
}
const List =({books,removeBook})=>{
    return (<>
        {books.map((book)=>{
        return ( <SingleBook book={book} removeBook={removeBook}></SingleBook>)
        })}
        </>)
}
const SingleBook=({book,removeBook})=>{

    return (<div>
            <h3>{book.id}</h3>
            <h3>{book.title}</h3>
            <img src={book.imgpath} alt="not found" width="100px" height="100px"></img>
            <h3>{book.author}</h3>
            <button onClick={()=>{removeBook(book.id)}}>Remove</button>
        </div>)
}


