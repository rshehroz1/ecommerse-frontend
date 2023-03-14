import { Link } from "react-router-dom"

export default function Signin() {
  return (
    <div className="mycard">
      <div className="card card_auth">
      <h2>Uzbegram</h2>
      <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">Email manzil kirgizing</label>
        </div>
      <div className="input-field col s6">
          <i className="material-icons prefix">password</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">Parol kiriting</label>
        </div>
        <button className="waves-effect waves-light btn #0d47a1 blue darken-3">Kirish</button>
        <p>
          <Link to="/signup">Do not have an accaunt</Link>
        </p>
      </div>
    </div>
  )
}
