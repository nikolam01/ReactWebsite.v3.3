import React, { Component } from "react";
import "../Assets/CSS/Background.css";
import PortfolioItem from "./PortfolioItem";

import img1 from "../Assets/img/Portofolio/01-thumbnail.jpg";
import img2 from "../Assets/img/Portofolio/02-thumbnail.jpg";
import img3 from "../Assets/img/Portofolio/03-thumbnail.jpg";
import img4 from "../Assets/img/Portofolio/04-thumbnail.jpg";
import img5 from "../Assets/img/Portofolio/05-thumbnail.jpg";
import img6 from "../Assets/img/Portofolio/06-thumbnail.jpg";

const portfolio = [
  {
    title: "Limitless dimensions",
    subtitle: "Responsive Design",
    image: img1,
    link: "https//:www.google.com",
  },
  { title: "Explore", subtitle: "Photography", image: img2 },
  { title: "Creativity", subtitle: "Graphic Design", image: img3 },
  { title: "Advertising", subtitle: "Digital Markteing", image: img4 },
  { title: "Style", subtitle: "Web Development", image: img5 },
  { title: "Coordination", subtitle: "Project Management", image: img6 },
];

class Portfolio extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="row">
            {portfolio.map((item, index) => {
              return <PortfolioItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
