import React from 'react'
import TeamMembers from './TeamMembers'
import '../Assets/CSS/Background.css'
import img2 from '../Assets/img/Team/2.jpeg'
const members = [
  {
    designerName: 'Nikola Mirilo',
    role: 'Web Developer',
    image: img2,
    instagram: 'https://www.instagram.com/nikola.mirilo/',
  },
]

const Team = (props) => {
  return (
    <section className="page-section bg-light" id="team" ref={props.section}>
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
            return <TeamMembers {...member} key={i} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Team
