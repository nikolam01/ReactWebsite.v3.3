import React, { Component } from "react";
import TeamMembers from "./TeamMembers";
import "../Assets/CSS/Background.css";

/*mport img1 from '../Assets/img/Team/1.jpg';*/
import img2 from "../Assets/img/Team/2.jpeg";
/*import img3 from '../Assets/img/Team/3.jpg';*/
const members = [
  /*{ designerName: 'Kay Garland', role: 'Lead Designer', image: img1 },*/
  {
    designerName: "Nikola Mirilo",
    role: "Web Developer",
    image: img2,
    instagram: "https://www.instagram.com/nikola.mirilo/",
  },
  /* { designerName: 'Diana Peterson', role: 'Lead Developer', image: img3 },*/
];
class Team extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Creator of this website!
            </h2>
          </div>
          <br></br>
          <br></br>
          <div className="row" id="team">
            {members.map((member, i) => {
              return <TeamMembers {...member} key={i} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Team;
