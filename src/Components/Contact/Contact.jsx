import React from 'react'
import "./Contact.css"
import logo from "../../Images/Zairza-logo.png"
function Contact() {
  return (
    <div className='contact'>
        <div className="contact-left">
            <h1>Want to know about us ?</h1>
            <p>Come and know more about Zairza and join our community to experience such more amazing stuffs.</p>
            <p className='info'>OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha.
                +91 7205883336</p>
        </div>
        <div className="contact-right"> 
            <div className="social-icon">      
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="footer">
                <p>Presented by </p>
                <img src  = {logo} />
            </div>
        </div>
    </div>
  )
}

export default Contact