import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/Team.css";

class TeamMembers extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={this.props.image}
            alt="Nikola Mirilo"
            id="imgMe"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/me";
            }}
          />
          <h4> {this.props.designerName}</h4>
          <p className="text-muted">{this.props.role}</p>
          <Link
            className="btn btn-dark btn-social mx-2"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/nikola.mirilo/";
            }}
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            className="btn btn-dark btn-social mx-2"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.facebook.com/nikola.mirilo.5/";
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            className="btn btn-dark btn-social mx-2"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/nikola-mirilo";
            }}
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    );
  }
}
export default TeamMembers;
