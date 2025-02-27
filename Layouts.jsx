import React from 'react'
import { Outlet } from 'react-router-dom'
import Footers from './Footers'
import Header from './Header'

const Layouts  = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footers/>
   </>
  )
}

export default Layouts 