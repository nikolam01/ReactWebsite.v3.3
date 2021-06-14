import React, { Component } from 'react'
import Field from '../Common/Field'
import { withFormik } from 'formik'
import '../Assets/CSS/Contact.css'
import * as Yup from 'yup'

const fields = {
  sections: [
    [
      {
        name: 'name',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your name',
        validation: 'Please enter your name',
      },
      {
        name: 'email',
        elementName: 'input',
        type: 'email',
        placeholder: 'Your email',
        validation: 'Please enter your email address',
      },
      {
        name: 'phone',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your phone number',
        validation: 'Please enter your phone number',
      },
    ],
    [
      {
        name: 'message',
        elementName: 'textarea',
        type: 'text',
        placeholder: 'Type message',
      },
    ],
  ],
}
class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase" id="title">
                Contact Us
              </h2>
              <h3 className="section-subheading text-muted">
                <br></br>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
                id="contactForm"
                method="POST"
                data-netlify="true"
                name="sentMessage"
                noValidate="novalidate"
                onSubmit={this.props.handleSubmit}
                netlify
              >
                <div className="row" id="contactRow">
                  {fields.sections.map((section, sectionIndex) => {
                    console.log(
                      'Rendering Section',
                      sectionIndex,
                      'with',
                      section
                    )
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                            />
                          )
                        })}
                      </div>
                    )
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                      id="submitBtn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br></br>
      </section>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, 'Come on bro your name is longer than that!')
      .required('You must give us your name'),
    email: Yup.string()
      .email('You need to give us a valid email')
      .required('We need your email'),
    phone: Yup.string()
      .min(10, 'Please provide your 10 digit phone number')
      .max(15, 'Your number is too long')
      .required('We need your phone number'),
    message: Yup.string()
      .min(500, 'You need to provide us more details')
      .required('Message is required'),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log('VALUES', values)
    alert('You have submitted the form', JSON.stringify(values))
  },
})(Contact)
