import React from 'react'

//components
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

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
