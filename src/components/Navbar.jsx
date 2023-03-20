import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="#424242 grey darken-3
    "style={{height: "10vh"}}>
    <div className="nav-wrapper container nav_bg #424242 grey darken-3
">
      <Link to="/" className="brand-logo">Uzbegram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/profile">My profile</Link></li>
        <li><Link to="/createpost">Maqola</Link></li>
      </ul>
    </div>
  </nav>
  )
}
