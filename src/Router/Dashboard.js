import React from 'react'

export const Dashboard = ({user}) => {
  return (
    <div>
        <h1>Welcome to Dashboad </h1>
        <h3>User Name : {user.fname}</h3>
        <h3>User Mail :{user.mail}</h3>
    </div>
  )
}
