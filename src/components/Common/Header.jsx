import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/Header.css";

class Header extends Component {
  render() {
    return (
      <header
        className="masthead"
        id="headerImg"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in" id="titleHeader">
              {this.props.title}
            </div>
            <div className="intro-heading text-uppercase" id="subtitleHeader">
              {this.props.subtitle}
            </div>
            {this.props.showButton && (
              <Link
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                id="btnTell"
                to={this.props.link}
              >
                {this.props.buttonText}
              </Link>
            )}
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
