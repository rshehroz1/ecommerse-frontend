// import { Link } from "react-router-dom"
import { useState } from "react"
import "./css/Signin.css"
import M from "materialize-css"

export default function Signin() {
  const [regName, setRegName] = useState("")
  const [regPasword, setRegPassword] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [clicked, setclicked] = useState(false)

  // backend qismi

  const postData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(regEmail)){
      M.toast({html: "Email manzilingizni to'gri kiriting", classes: "#c62828 red darken-3"})
      return
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: regName,
        password: regPasword,
        email: regEmail
      })
    }).then(res=>res.json())
    .then(data =>{
      if(data.error){
        M.toast({html: data.error, classes: "#c62828 red darken-3"})
      }else{
        M.toast({html: data.msg, classes: "#2e7d32 green darken-3"})
        setclicked(!clicked)
      }
    })
  }

  return(
    <>
    <section>
      <div className={clicked ? "container active" : "container"}>
        <div className="user signinBx">
          <div className="imgBx">
            <img src="https://images.unsplash.com/photo-1576859958081-27de5c70262a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="rasim"/></div>
          <div className="formBx">
            <form>
              <h2>Sign In</h2>
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <input type="submit" placeholder="Submit"/>
              <p className="signup">
                Don't have an account ?
                {/* eslint-disable-line */}
                <a href="#" onClick={()=> setclicked(!clicked)}>
                  login
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form>
              <h2>Create an Account</h2>
              <input type="text"  placeholder="Username" value={regName}  onChange={(e)=> setRegName(e.target.value)}/>
              <input type="email"  placeholder="Email Id" value={regEmail}  onChange={(e)=> setRegEmail(e.target.value)}/>
              <input type="password"  placeholder="Create Password" value={regPasword} onChange={(e)=> setRegPassword(e.target.value)}/>
              <input type="submit" onClick={()=> postData()} value="Sign Up" />
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
  </>
  )
}
