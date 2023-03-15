import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='white'>
    <div className="nav-wrapper container nav_bg">
      <Link to="/" className="brand-logo">Uzbegram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="signup">Signup</Link></li>
        <li><Link to="/profile">My profile</Link></li>
        <li><Link to="/createpost">Maqola</Link></li>
      </ul>
    </div>
  </nav>
  )
}
