import React from 'react'
import TeamMembers from './TeamMember'
import { useTeam } from '../../context/TeamContext'

const Team = (props) => {
  let { teamData } = useTeam()
  return (
    <section className="page-section" id="team" ref={props.section}>
      <div className="container">
        <div className="text-center">
          <h2
            className="section-heading text-uppercase "
            style={{ marginBottom: '10vh' }}
          >
            Creator of this website!
          </h2>
        </div>

        <div className="row" id="team">
          {teamData.map((member, index) => {
            return <TeamMembers {...member} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Team
