import React from 'react'
import NavBars from './components/NavBars.jsx'
import { Outlet } from 'react-router-dom'

function Root() {
  localStorage.clear()
  return (
   <>
   <NavBars/>
   <main className='container-fluid' style={{marginTop:"100px"}}>
   <Outlet/>
   </main>
   </>
  )
}

export default Root