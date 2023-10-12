import React from "react";

function RendeerObjects() {
const events = [
    {
        id: 0 ,
        evename: "Robo Race",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    },
    {
        id: 1 ,
        evename: "Web Wavers",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    },
    {
        id: 2 ,
        evename: "Robo Clinch",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    },
    {
        id: 3 ,
        evename: "Robo Race",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    },
    {
        id: 4 ,
        evename: "Robo Race",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    },
    {
        id: 5 ,
        evename: "Robo Race",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    },
    {
        id: 6 ,
        evename: "Robo Race",
        datandtime: "27 Apr - 9am",
        venue: "Sac Area"
    }
];

const listitems = events.map((element) => {
    return(
        <div key={element.id} className="boxes">
                <section><img src='https://th.bing.com/th/id/OIP.ceuBkSi87pmxoSndw0p0kAHaLF?w=117&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" className='image'/></section>
                <div className='toptext'>
                  <div className='hex'>{element.evename}</div>
                  <div className='vex'>Enroll Now</div>
                </div>
                <div className='btmtxt'>
                  <div className='top'>
                    <div>Date & Time</div>
                    <div>Venue</div>
                  </div>
                  <div className='btm'>
                    <div>{element.datandtime}</div>
                    <div>{element.venue}</div>
                  </div>
                </div>
        </div>
    );    
})
return(
    <div className="boxio">{listitems}</div>
    )  
}

export default RendeerObjects
