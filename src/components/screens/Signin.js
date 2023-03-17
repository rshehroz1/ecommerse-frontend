// import { Link } from "react-router-dom"
import { useState } from "react"
import "./css/Signin.css"
export default function Signin() {
  const [regName, setRegName] = useState("")
  const [regPasword, setRegPassword] = useState("")
  const [regEmail, setRegEmail] = useState("")
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
              <input type="text" value={regName} placeholder="Username" onChange={(e)=> setRegName(e.target.value)}/>
              <input type="password" value={regEmail} placeholder="Password" onChange={(e)=> setRegEmail(e.target.value)}/>
              <input type="submit" value={regPasword} onChange={(e)=> setRegPassword(e.target.value)}/>
              <p className="signup">
                Don't have an account ?
                {/* eslint-disable-line */}
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
                {/* eslint-disable-line */}
                <a href="#" onClick={()=> setclicked(!clicked)}> Sign In </a>
              </p>
            </form>
          </div>
          <div className="imgBx"><img alt="signin" src="https://images.unsplash.com/photo-1628972799193-1a6be77e183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" /></div>
        </div>
      </div>
    </section>
  </body>
  )
}
