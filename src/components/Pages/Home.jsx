import React, { Component } from 'react'
import Header from '../Common/Header'
//import image from "../Assets/img/background.jpg";
import image2 from '../Assets/img/background.webp'

//Reusable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Team from '../Common/Team'
import Timeline from '../Common/Timeline'
import Footer from '../Common/Footer'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.clickFunction = this.clickFunction.bind(this)
  }
  handleClick() {
    console.log('hello')
  }
  clickFunction() {
    console.log('fuju')
  }

  render() {
    return (
      <div>
        <Header
          title="Welcome To My Personal Website!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell me more"
          link="/me"
          showButton={true}
          image={image2}
        />
        <Portfolio />
        <Timeline />
        <Team />
        <Footer />
      </div>
    )
  }
}
export default Home
