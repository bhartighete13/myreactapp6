import React from 'react'

import { bookinfo } from './bookinfo'
import { Book4 } from './Book4'

export const BookList4 = () => {
  return (
    <div>
        {bookinfo.map((book)=>{
            return (
                    <Book4 {...book}></Book4>
            )
        })}
    </div>
  )
}
