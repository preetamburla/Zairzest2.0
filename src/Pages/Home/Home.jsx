import React from 'react'
import "./Home.css"
import Featured from '../../Components/Featured/Featured';
import Guide from '../../Components/Guide/Guide';
import Events from '../../Components/Events/Events';
import Contact from '../../Components/Contact/Contact';
function Home() {
  return (
    <div>
      <Featured />
      <Guide />
      <Events />
      <Contact />
    </div>
  )
}

export default Home