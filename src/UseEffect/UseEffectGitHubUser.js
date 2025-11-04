import React, { useEffect } from 'react'
import { useState } from 'react';
export const UseEffectGitHubUser = () => {
    var[results,setResults]=useState([]);

  useEffect(()=>{loadUserData();});

    var loadUserData=async()=>{
        var response =await fetch('https://api.github.com/users')
        var data=await response.json();
        console.log(data);
        setResults(data);
    }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>User Id</td>
            <td>User Name</td>
            <td>User Image</td>
            <td>User Profile</td>
            <td>HTML_URL</td>
          </tr>
        </thead>
        <tbody>
          {results.map((rec)=>{
            var{id,login,avatar_url,html_url}=rec;
            return  <tr>
              <td>{id}</td>
              <td>{login}</td>
              <td><img src={avatar_url} alt="not found" width="70px" height="70px"></img></td>
            <td> <a href={html_url} target='_blank' rel='noreferer'>Click here to visit Profile</a></td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
