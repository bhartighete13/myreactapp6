import React from 'react'
import { bookinfo } from '../bookinfo'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
    var[books,setBooks]=useState(bookinfo);
  return (
    <div>
        {books.map((book)=>{
            //return <SingleBook book={book}/>
            return (
                <div>
                    <h3>{book.title}</h3>
            <Link to={`/products/${book.id}`}>Click here for more Info......</Link>
                </div>
            )
        })}
    </div>
  )
}

// const SingleBook =({book})=>{
//     return (<div>
//             <h3>{book.id}</h3>
//             <h3>{book.title}</h3>
//             <img src={book.imgpath} alt="not found" width="150px" ></img>
//             <h3>{book.author}</h3>
//     </div>)
// }