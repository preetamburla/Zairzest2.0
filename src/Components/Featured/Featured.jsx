import React from 'react'
import "./Featured.css"
import person from "../../Images/feature-person.png"
function Featured() {
  return (
    <div className='featured'>
      <div className="left">
        <h2>Experience the Future</h2>
        <h2>Tech with Zairza</h2>
        <p>Release all your stress with the exciting tech and fun events in the most awaited fest...Zairzest 2.0 presented by Zairza</p>
        <button>Register Now</button>
      </div>
      <div className="right">
        <img src = {person} />
      </div>
    </div>
  )
}

export default Featured