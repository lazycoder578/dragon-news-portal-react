import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='max-w-6xl mx-auto font-poppins'>
        <Outlet />
    </div>
  )
}
