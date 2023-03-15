import React from 'react'

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profileMain'>
        <div><img className='profileImg' src="https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6" alt="profile" /></div>
        <div>
          <h4>Shehroz Raxmatov</h4>
          <div className='infoProfile'>
            <p>99 post</p>
            <p>99 followers</p>
            <p>99 following</p>
          </div>
        </div>
      </div>
      <div className="gallerey">
        <img className='imgItem' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <img className='imgItem' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <img className='imgItem' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <img className='imgItem' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      </div>
    </div>
  )
}
