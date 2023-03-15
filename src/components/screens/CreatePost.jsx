export default function CreatePost() {
  return (
    <div className="card input-field post_card">
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
        <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file" />
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" />
      </div>
    </div>
    <button className="waves-effect waves-light btn #0d47a1 blue darken-3">Maqola qo'shish</button>
    </div>
  )
}
