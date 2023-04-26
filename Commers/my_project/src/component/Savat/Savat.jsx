import React from 'react'
import {Link } from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'

export default function Savat() {
  return (
    <div className='container'>
       <div className="row my-5">
       <div className='kattainput'>
          <input className='h-100 inp' type="text" />
          <Link to={'/salom'}>
            <BsCart2 className='bs' />
          </Link>
          <div className='p'>
            {/* <p>{shop.length}</p> */}
          </div>
        </div>
       </div>
    </div>
  )
}
