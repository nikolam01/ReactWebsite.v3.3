import React, { Component } from 'react'
import '../Assets/CSS/Swipe.css'
import '../Assets/JS/Swipe'
import img1 from '../Assets/img/Portofolio/01-thumbnail.jpg'
import img2 from '../Assets/img/Portofolio/02-thumbnail.jpg'
import img3 from '../Assets/img/Portofolio/03-thumbnail.jpg'

class Swipe extends Component {
  render() {
    return (
      <section id="swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                className="img-fluid"
                id="swipeImg"
                src={img1}
                alt="image1"
              />
            </div>
            <div class="swiper-slide">
              <img
                className="img-fluid"
                id="swipeImg"
                src={img2}
                alt="image2"
              />
            </div>
            <div class="swiper-slide">
              <img
                className="img-fluid"
                id="swipeImg"
                src={img3}
                alt="image3"
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
        </div>
      </section>
    )
  }
}
export default Swipe
