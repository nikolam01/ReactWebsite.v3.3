import React, { Component } from "react";
import SingleService from "./SingleService";
import "../Assets/CSS/Services.css";

const services = [
  {
    title: "Web development",
    description:
      "Creating websites for your company/personal use. Responsive web design and speed are guaranteed",
    icon: "fa-laptop",
  },
  {
    title: "E-commerce",
    description:
      "Online stores for commercial and representive use, via platform Shopify",
    icon: "fa-shopping-cart",
  },
  {
    title: "Web-security",
    description:
      "Checking and testing your websites/applications security - Q/A testing",
    icon: "fa-lock",
  },
  {
    title: "Digital Marketing",
    description:
      "Scaling reach of your website/company using SEO methodology, Backlinks, and Google Ads",
    icon: "fa-globe",
  },
  {
    title: "Project Management",
    description:
      "Initiating, planning, executing, monitoring, controlling and closing projects",
    icon: "fa-project-diagram",
  },
  {
    title: "Q/A Testing",
    description:
      "Ensuring that your product is of the highest possible quality for your customers. ",
    icon: "fa-tasks",
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
