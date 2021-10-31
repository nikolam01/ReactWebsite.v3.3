import React from 'react'
import { Navbar, Footer } from '../components'

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
