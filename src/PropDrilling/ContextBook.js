import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { bookinfo } from '../bookinfo';

var BookContainer=createContext();
export const ContextBook = () => {

    var[books,setBooks]=useState(bookinfo);
        console.log(books);
    
        var removeBook=(id)=>{
            var remainingBooks=books.filter((book)=>{
                return book.id!==id;
            })
            setBooks(remainingBooks);
        }
return (
    <div>
        <BookContainer.Provider value={{books,removeBook}}>
            <List />
        </BookContainer.Provider>

    </div>
  )
}
const List=()=>{
    var{books}=useContext(BookContainer);
    return (<>
        {books.map((book)=>{
        return ( 
                <SingleBook book={book} />
                )
        })}
        </>)
}
const SingleBook=({book})=>{
    var{removeBook}=useContext(BookContainer);
return (<>
        <h3>{book.id}--{book.title}---{book.author}</h3>
        <img src={book.imgpath} alt="not found" width="100px"/>
        <button onClick={()=>{removeBook(book.id)}}>Remove</button>
        
    </>
    )
}