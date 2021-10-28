import React from 'react'

//components
import Navbar from '../Common/Navbar'
import Form from '../Common/Form'
import Footer from '../Common/Footer'

const Contact = () => {
  return (
    <div className="contact">
      <Navbar pageType="contact" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
