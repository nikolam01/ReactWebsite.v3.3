import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'

const TeamMembers = (props) => {
  return (
    <div
      className={
        data.team_members.length === 1
          ? 'col-sm-12'
          : data.team_members.length === 2
          ? 'col-sm-6'
          : 'col-sm-4'
      }
      style={{ cursor: 'pointer' }}
    >
      <div className="team-member">
        <img
          className="mx-auto rounded-circle"
          src={props.image}
          alt="Nikola Mirilo"
          id="imgMe"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/me'
          }}
        />
        <h4> {props.name}</h4>
        <p className="text-muted">{props.role}</p>
        <Link
          className="btn btn-dark btn-social mx-2"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = `${props.instagram}`
          }}
        >
          <i className="fab fa-instagram"></i>
        </Link>
        <Link
          className="btn btn-dark btn-social mx-2"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = `mailto:${props.email}`
          }}
        >
          <i class="fas fa-envelope" style={{ color: '#000000' }}></i>
        </Link>
        <Link
          className="btn btn-dark btn-social mx-2"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = `${props.linkedin}`
          }}
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </div>
    </div>
  )
}
export default TeamMembers
