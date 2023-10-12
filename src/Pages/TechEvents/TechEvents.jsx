import React from 'react'
import "./TechEvents.css"
import RendeerObjects from './data.jsx'
import Contact from '../../Components/Contact/Contact';

function TechEvents() {
  return (
    <div>
           <h1>Tech Events</h1> 
           <RendeerObjects />
           <Contact/>
    </div>
  );
}

export default TechEvents
