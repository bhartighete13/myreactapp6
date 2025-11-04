import React from 'react'
import { bookinfo } from '../bookinfo';
import { useState } from 'react';

export const UseStateArrayOfObjects = () => {
    var[books,setBooks]=useState(bookinfo);
    var removeAllBooks=()=>{
        books=[];
        setBooks(books);  //setBooks([]);
    }
    var addAllBooks=()=>{
        setBooks(bookinfo);
    }
    var removeBookById=(id)=>{
           var balanceBooks= books.filter((book)=>{
                return book.id!==id
            })
            setBooks(balanceBooks);
    }
  return (
    <div>
        {/* var max=a>b?a:b */}
        {books.length!=0?<button onClick={removeAllBooks}>Remove All Books</button>
        :<button onClick={addAllBooks}>Add All Books</button>}
        <table>
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Book Title</th>
                    <th>Book Image</th>
                    <th>Book Author</th>
                    <th>Remove Book</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book)=>{
                        var{id,title,imgpath,author}=book;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td><img src={imgpath} alt="not found" width="200px" height="170px"></img></td>
                                <td>{author}</td>
                                <td><button onClick={()=>{removeBookById(id)}}>Remove Book</button></td>
                            </tr>
                        )
                })}
            </tbody>
        </table>
    </div>
  )
}

