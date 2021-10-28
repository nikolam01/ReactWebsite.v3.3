import { Link } from 'react-router-dom'
import '../Assets/CSS/Header.css'

const Header = (props) => {
  return (
    <header
      className="masthead"
      id="headerImg"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in" id="titleHeader">
            {props.title}
          </div>
          <div className="intro-heading text-uppercase" id="subtitleHeader">
            {props.subtitle}
          </div>
          {props.showButton && (
            <Link
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              id="btnTell"
              to={props.link}
            >
              {props.buttonText}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
