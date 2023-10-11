import React from 'react';
import "./Events.css";
import techEvents from "../../Images/tech-events.png"
import funEvents from "../../Images/fun-events.png"
import workshops from "../../Images/workshops.png"
function Events() {
  return (
    <div className='events'>
        <div className="events-heading">
            <h1>Events for you</h1>
            <p>Everything has been made simple for you to scroll around and get the most out of the options available.</p>
        </div>
        <div className="tabs">
            <div className="tab">
                <img src={techEvents} />
            </div>
            <div className="tab">
            <img src={funEvents} />
            </div>
            <div className="tab">
            <img src={workshops} />
            </div>
        </div>
    </div>
  )
}

export default Events