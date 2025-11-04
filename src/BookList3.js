import React from 'react'
var bookinfo=[{title:"Ideas and Opinions",
    imgpath:"https://m.media-amazon.com/images/I/610jKE0mMlL._SY522_.jpg",
     author:" Albert Einstein", gnere:"Biography"},
    {
        title:"Savitribai Phule",
        imgpath:"https://m.media-amazon.com/images/I/71Dtgi9VIlL._SY425_.jpg" ,author:"  by G. A. Ugale"
    },
    {
        title:"The World as I See It",
        imgpath:"https://m.media-amazon.com/images/I/81RViQwXYuL._SY522_.jpg",
        author:" Albert Einstein", gnere:"Biography"

    }
]
export const BookList3 = () => {
  return (
    <div className='booklist'>
        {bookinfo.map((book)=>{
            return (
            // <Book3 title={book.title} imgpath={book.imgpath} author={book.author} gnere={book.gnere}></Book3> 
            <Book3 {...book}></Book3>
            )
        })}
    </div>
  )
}
const Book3=(props)=>{
    var {title,imgpath,author,gnere}=props; //object destructuring
    return (<div className='book'>
            <h2>{title}</h2>
            <img src={imgpath} alt="not fond" width="200px" height="200px"></img>
            <h3>{author}</h3>
            <h3>{gnere}</h3>
    </div>)
}
