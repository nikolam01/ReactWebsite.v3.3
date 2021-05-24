import React, { Component } from "react";
import SingleService from "./SingleService";
import "../Assets/CSS/Services.css";

const services = [
  {
    title: "Web development",
    description:
      "Creating websites for your company/personal use. Responsive web design and speed are guaranteed.",
    icon: "fa-laptop",
  },
  {
    title: "E-commerce",
    description:
      "Online stores for commercial and representive use, via platform Shopify.",
    icon: "fa-shopping-cart",
  },
  {
    title: "Web-security",
    description:
      "Checking and testing your websites/applications security - Q/A testing.",
    icon: "fa-lock",
  },
  {
    title: "Digital Marketing",
    description:
      "Creating websites for your company/personal use. Responsive web design and speed are guaranteed.",
    icon: "fa-globe",
  },
  {
    title: "Management and Organization",
    description:
      "Online stores for commercial and representive use, via platform Shopify.",
    icon: "fa-tasks",
  },
  {
    title: "Project Management",
    description:
      "Checking and testing your websites/applications security - Q/A testing.",
    icon: "fa-project-diagram",
  },
];

class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase" id="title">
              Services
            </h2>
            <br />
            <br />
          </div>
          <div className="row text-center" id="serviceItem">
            {services.map((service, index) => {
              return <SingleService {...service} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
