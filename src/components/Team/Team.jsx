import React, { useState, useEffect } from 'react'
import TeamMembers from './TeamMember'
import data from '../../data/data.json'

const Team = (props) => {
  const [teamData, setTeamData] = useState([])
  useEffect(() => {
    setTeamData(data.team_members)
  }, [teamData])
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
