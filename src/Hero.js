import React from 'react'

export const Hero = ({heroname}) => {
    if(heroname==="Joker")
    {
        throw new Error("Not a Hero");
    }
  return (
    <div>
        {heroname}
    </div>
  )
}
