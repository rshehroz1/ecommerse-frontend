export default function CreatePost() {
  return (
    <div className="card cardPost">
        <div className="card-image">
          <img src="https://i.pinimg.com/564x/66/61/e1/6661e1bc733eb2147276b7cad6d2e367.jpg" alt="sasuke"/>
          <span className="card-title">Rasim joylang</span>
        </div>
        <div className="card-content">
        <div class="input-field col s6">
          
          <i class="material-icons prefix">subtitles</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Sarlavha</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">content_paste</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Maqola</label>
        </div>
        <div class="file-field input-field">
      <div class="btn">
        <span><i className="material-icons">add</i></span>
        <input type="file" />
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Rasimingizni joylang" />
      </div>
    </div>
        <button className="btn">
          Maqola qo'shish
        </button>

        </div>
      </div>
  )
}
