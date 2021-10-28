import React from 'react'

//components
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

const Error = () => {
  return (
    <div className="error">
      <Navbar pageType="error" />
      <h1>Error page</h1>
      <Footer />
    </div>
  )
}

export default Error
