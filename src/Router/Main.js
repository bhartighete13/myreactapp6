import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div style={{backgroundColor:"lightgreen",width:"400px", height:"500px"}}>
        <h2 >This is main Component</h2>
        <Link to="/" className='mg'>Main</Link>
        <Link to="/home" className='mg'>Home</Link>
        <Link to="/login" className='mg'>Login</Link>
        <Link to="/about" className='mg'>About</Link>
        <Link to="/products" className='mg'>Products</Link>
        <Outlet/>
    </div>
  )
}
