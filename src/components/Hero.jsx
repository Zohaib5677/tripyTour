import React from 'react'
import "./Hersostyle.css"
function Hero(props) {
  return (
   <>
   <div className={props.cName}>
    <img src={props.heroImg} alt="heroImg" />
   </div>
   <div className="hero-text">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a href={props.url} className={props.btnClass}>
        {props.buttontext}
    </a>
   </div>
   </>
  )
}

export default Hero