import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({user,children}) => {
    if(user.fname==='' && user.mail==='')
    {
        return  (<Navigate to='/login'></Navigate>)
    }
    else{
        return children;
    }
  return (
   
    <div></div>
  )
}
