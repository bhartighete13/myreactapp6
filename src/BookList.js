import React from 'react'
var title='Mans Search For Meaning';
var imgpath="https://m.media-amazon.com/images/I/61MdAtnimVL._SL1500_.jpg";
var auther='Viktor E. Frankl';
var sampleobj={id:100,name:"rohan",age:22}
var samplearr=[{id:100,name:"Raj",age:22},{id:101,name:"Soham",age:21}];
 const BookList = () => {
  return (<div className='booklist'>
        {/* <Book1></Book1> */}
        <Book  title="Mans Search For Meaning" 
        imgpath="https://m.media-amazon.com/images/I/61MdAtnimVL._SL1500_.jpg"
        auther="Viktor E. Frankl" gnere="Biographi"></Book>

        <Book  title="A Promised Land" 
        imgpath="https://m.media-amazon.com/images/I/81mRu1rTvgL._SY522_.jpg"
        auther=" Barack Obama "></Book>

        <Book  title="Business Kohinoor" 
        imgpath="https://m.media-amazon.com/images/I/71UAGFqUFnL._SL1500_.jpg"
        auther="  B C PANDEY " gnere="Biographi"></Book>
    </div>)}
const Book=(props)=>{
    var {title,imgpath,auther,gnere}=props; //object destructuring
    return (
        <div className='book'>
            {/* <h2>{props.title}</h2>
            <img src={props.imgpath} alt="not fond" width="200px" height="200px"></img>
            <h3>{props.auther}</h3>
            <h3>{props.gnere}</h3> */}

             <h2>{title}</h2>
            <img src={imgpath} alt="not fond" width="200px" height="200px"></img>
            <h3>{auther}</h3>
            <h3>{gnere}</h3>
        </div>
    )}
const Book1=()=>{
    return (
        <div>
             {/* <h2>Man's Search For Meaning</h2>
            <img src="https://m.media-amazon.com/images/I/61MdAtnimVL._SL1500_.jpg" alt="not found" width="200px"></img>
            <h2>Viktor E. Frankl</h2>
            <h3>Price - 300</h3> */}
            <h2>{title}</h2>
            <img src={imgpath} alt="not found" width="200px" ></img>
            <h3>{auther}</h3>
            <h3>{sampleobj.id}----{sampleobj.name}-----{sampleobj.age}</h3>
            <h3>{samplearr[0].id}---{samplearr[0].name}----{samplearr[0].age}</h3>
            <h3>{samplearr[1].id}---{samplearr[1].name}----{samplearr[1].age}</h3>
        </div>
    )
}
export default BookList;