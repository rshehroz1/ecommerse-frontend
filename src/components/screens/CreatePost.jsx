import { useState } from "react"
import M from "materialize-css"
import { useHistory } from "react-router-dom";

export default function CreatePost() {
  const history = useHistory()
  const [title, setTitile] = useState("")
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  

  const postDetails =()=>{
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "uzbekgram")
    data.append("cloud_name", "dbdxtbymy")
    fetch("https://api.cloudinary.com/v1_1/dbdxtbymy/image/upload", {
      method: "post",
      body: data
    }).then(res=>res.json())
    .then(data=> console.log(data))
    .catch(err => {
      setUrl(data.url)
      console.log(err);
    })

    fetch("http://localhost:3000/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        body,
        pic: url,
      }) 
    }).then(res=>res.json())
    .then(data =>{
      if(data.error){
        M.toast({html: data.error, classes: "#c62828 red darken-3"})
      }else{
        M.toast({html: data.msg, classes: "#2e7d32 green darken-3"})
        history.push("/")
      }
    })
  }
  return (
    <div className="card cardPost">
        <div className="card-image">
          <img src="https://i.pinimg.com/564x/66/61/e1/6661e1bc733eb2147276b7cad6d2e367.jpg" alt="sasuke"/>
          <span className="card-title">Rasim joylang</span>
        </div>
        <div className="card-content">
        <div class="input-field col s6">
          
          <i class="material-icons prefix">subtitles</i>
          <input id="icon_prefix" type="text" class="validate" value={body} onChange={(e)=> setBody(e.target.value)} />
          <label htmlFor="icon_prefix">Sarlavha</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">content_paste</i>
          <input id="icon_prefix" type="text" class="validate"  value={title} onChange={(e)=> setTitile(e.target.value)} />
          <label htmlFor="icon_prefix">Maqola</label>
        </div>
        <div class="file-field input-field">
      <div class="btn">
        <span><i className="material-icons">add</i></span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Rasimingizni joylang" />
      </div>
    </div>
        <button className="btn" onClick={()=> postDetails()}>
          Maqola qo'shish
        </button>

        </div>
      </div>
  )
}
