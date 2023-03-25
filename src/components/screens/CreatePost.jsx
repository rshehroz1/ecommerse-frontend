import { useState, useEffect } from "react"
import M from "materialize-css"
import { useHistory } from "react-router-dom";

export default function CreatePost() {
  const history = useHistory()
  const [title, setTitile] = useState("")
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  
  useEffect(()=>{
    if(url){
    fetch("http://localhost:3000/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Shehroz " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        title: title,
        body: body,
        pic: url,
      }) 
    }).then(res=>res.json())
    .then(data =>{
      if(data.error){
        M.toast({html: data.error, classes: "#c62828 red darken-3"})
      }else{
        M.toast({html: "Siz muvffaqiyatli maqola qo'shdingiz", classes: "#2e7d32 green darken-3"})
        history.push("/") 
      }
    })
  }
  
  }, [url])

  const postDetails =()=>{
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "uzbekgram")
    data.append("cloud_name", "dbdxtbymy")
    fetch("https://api.cloudinary.com/v1_1/dbdxtbymy/image/upload", {
      method: "post",
      body: data
    }).then(res=>res.json())
    .then(data=> {
      setUrl(data.url)
  })
    .catch(err => {
      console.log(err);
    })

    
  }
  return (
    <div className="card cardPost">
        <div className="card-image">
          <img src="https://i.pinimg.com/564x/66/61/e1/6661e1bc733eb2147276b7cad6d2e367.jpg" alt="sasuke"/>
          <span className="card-title">Rasim joylang</span>
        </div>
        <div className="card-content">
        <div className="input-field col s6">
          
          <i className="material-icons prefix">subtitles</i>
          <input id="icon_prefix" type="text" value={body} onChange={(e)=> setBody(e.target.value)} />
          <label htmlFor="icon_prefix">Sarlavha</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">content_paste</i>
          <input id="icon_prefix" type="text" value={title} onChange={(e)=> setTitile(e.target.value)} />
          <label htmlFor="icon_prefix">Maqola</label>
        </div>
        <div className="file-field input-field">
      <div className="btn">
        <span><i className="material-icons">add</i></span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Rasimingizni joylang" />
      </div>
    </div>
        <button className="btn" onClick={()=> postDetails()}>
          Maqola qo'shish
        </button>

        </div>
      </div>
  )
}
