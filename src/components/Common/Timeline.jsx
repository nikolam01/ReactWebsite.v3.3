import React, { Component } from "react";
import "../Assets/CSS/Background.css";
import "../Assets/CSS/Timeline.css";

class Timeline extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <br />
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="img/about/1.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2016-2017</h4>
                  <h4 className="subheading">Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Started learning about programming in Java and C. Later, i
                    started learning web development, especially frontend
                    development.
                  </p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="img/about/3.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>January 2019</h4>
                  <h4 className="subheading">Created first website</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    It was simple website that I made using HTML, CSS and
                    Netlify platform. It was at basic level of coding in HTML
                    and CSS. The only "advanced" characteristic was responsive
                    design.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="img/about/2.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2020</h4>
                  <h4 className="subheading">
                    Transition to full stack programming
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Started learning more about backend and server side tools.
                    Numerous libraries and softwares like LoopBack4, Node JS,
                    Axios, Mongo DB, etc.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="img/about/4.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>January 2021</h4>
                  <h4 className="subheading">Learning more, more, and more</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Expanding knowledge about responsive design, servers, and
                    ReactJS. This website is made using ReactJS and NodeJS.
                  </p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Let
                  <br />
                  me
                  <br />
                  Help
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Timeline;
