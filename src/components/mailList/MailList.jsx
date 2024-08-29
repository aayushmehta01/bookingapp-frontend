import React from 'react'
import './MailList.css'

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Travel more, spend less</h1>
        <span className="mailDesc">Save 10% or more at participating properties - just look for the blue Genius label</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email'/>
            <button className="subscribe">Subscribe</button>
        </div>
    </div>

  )
}

export default MailList
