import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <div className="mycard">
      <div className="card card_auth">
      <h2>Uzbegram</h2>
      <div className="input-field col s6">
          <i className="material-icons prefix">verified_user</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">Ismingiz</label>
        </div>
      <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">Email kiriting</label>
        </div>
      <div className="input-field col s6">
          <i className="material-icons prefix">password</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">Parol kiriting</label>
        </div>
        <button className="waves-effect waves-light btn #0d47a1 blue darken-3">Ro'yxatdan o'tish</button>
        <p>
          <Link to="/signin">Already have an accaunt</Link>
        </p>
      </div>
    </div>
  )
}
