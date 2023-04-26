import React, { useEffect } from 'react'
import Axios from 'axios'
import { ResetTvSharp } from '@mui/icons-material'
import '../navbar/navbarcss.css'
import { BsCart2 } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export default function Navbar() {
  const shop = useSelector(state => state.counter)


  return (
    <div>
      <div className='container '>
        <div className='d-flex box my-5'>
          <div className='selectt'>
            <select className='w-100 selectt'>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>

            </select>
          </div>
          <div className='d-flex box1'>
            <input className='input1' placeholder='start' type="number" />
            <input className='input2' placeholder='end' type="number" />
          </div>
        </div>
        <div className='kattainput'>
          <input className='h-100 inp' type="text" />
          <Link to={'/salom'}>
            <BsCart2 className='bs' />
          </Link>
          <div className='p'>
            <p>{shop.length}</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}
