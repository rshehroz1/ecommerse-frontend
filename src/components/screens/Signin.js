// import { Link } from "react-router-dom"
import { useState } from "react"
import "./css/Signin.css"
export default function Signin() {
  const [clicked, setclicked] = useState(false)

  return(
    <body>
    <section>
      <div className={clicked ? "container active" : "container"}>
        <div className="user signinBx">
          <div className="imgBx">
            <img src="https://images.unsplash.com/photo-1576859958081-27de5c70262a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="rasim"/></div>
          <div className="formBx">
            <form>
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <a href="#" onClick={()=> setclicked(!clicked)}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form>
              <h2>Create an Account</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="email" name="" placeholder="Email Id" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <a href="#" onClick={()=> setclicked(!clicked)}> Sign In </a>
              </p>
            </form>
          </div>
          <div className="imgBx"><img src="https://images.unsplash.com/photo-1628972799193-1a6be77e183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" /></div>
        </div>
      </div>
    </section>
 
  </body>
  )

  // return (
  //   <div classNameNameName="mycard">
  //     <div classNameNameName="card card_auth">
  //     <h2>Uzbegram</h2>
  //     <div classNameNameName="input-field col s6">
  //         <i classNameNameName="material-icons prefix">email</i>
  //         <input id="icon_prefix" type="text" classNameNameName="validate" />
  //         <label for="icon_prefix">Email manzil kirgizing</label>
  //       </div>
  //     <div classNameNameName="input-field col s6">
  //         <i classNameNameName="material-icons prefix">password</i>
  //         <input id="icon_prefix" type="text" classNameNameName="validate" />
  //         <label for="icon_prefix">Parol kiriting</label>
  //       </div>
  //       <button classNameNameName="waves-effect waves-light btn #0d47a1 blue darken-3">Kirish</button>
  //       <p>
  //         <Link to="/signup">Do not have an accaunt?</Link>
  //       </p>
  //     </div>
  //   </div>
  // )
}
