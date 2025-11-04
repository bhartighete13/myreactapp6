import React from 'react'
import { bookinfo } from '../bookinfo';
import { useParams } from 'react-router-dom';

export const SingleProduct = () => {

    var{productId}=useParams();
   var book= bookinfo.find((b)=>{
        return b.id===parseInt(productId);//100===102,101==102,102==102
    })
  return (
    <div>
        <h3>{book.id}</h3>
            <h3>{book.title}</h3>
            <img src={book.imgpath} alt="not found" width="150px" ></img>
            <h3>{book.author}</h3>
    </div>
  )
}
