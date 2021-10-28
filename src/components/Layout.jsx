import React from 'react'

import Navbar from './Common/Navbar'
import Footer from './Common/Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
