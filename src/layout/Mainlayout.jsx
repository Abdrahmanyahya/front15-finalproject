import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/Footer'

function Mainlayout() {
  return (
<>

<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
</>
      



  )
}

export default Mainlayout
