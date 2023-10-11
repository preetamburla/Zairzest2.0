import React from 'react'
import "./Guide.css";
import zenImg from "../../Images/Guide-image.png"
function Guide() {
  return (
    <div className='guide'>
        <div className="guide-left">
            <img src = {zenImg} />
        </div>
        <div className="guide-right">
            <h3>Zen will guide you</h3>
            <h5>Zest. For. Tech.</h5>
            <p>"The best way to live the future is to create it." Moving on from the safari around the tech forest, we now bring you the city of tech. Experience the new future with us. We shall lead you to explore through the suburb of the cybercity, to drive into various tech stacks, dev branches, recursion, trees and languages like firefox and python. The Best is yet to come. Stay tuned for something awesome!.</p>

        </div>
    </div>
  )
}

export default Guide