import React from 'react'
import "./DestiStyle.css"
function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give the opportunity</p>
          
            <div className="first-des">
                <div className="des-text">
                    <h2>Jakarta</h2>
                    <p>A dynamic megacity blending modern skyscrapers with colonial history and diverse cultures, Jakarta offers shopping, cuisine, and nightlife like no other place in Indonesia.</p>
                </div>
                <div className="image">
                    <img src="1.jpg" alt="image" />
                    <img src="2.jpg" alt="image" />
                    {/* <img src="1.jpg" alt="image" /> */}
                </div>
            </div>
            <div className="first-des-second">
                <div className="des-text">
                    <h2>tall volcani</h2>
                    <p> Known for traditional arts, batik, and nearby ancient temples like Borobudur and Prambanan, Yogyakarta is the cultural and spiritual soul of Java.</p>
                </div>
                <div className="image">
                    <img src="3.jpg" alt="image" />
                    <img src="4.jpg" alt="image" />
                    {/* <img src="1.jpg" alt="image" /> */}
                </div>
            </div>
        </div>
        
    )
}

export default Destination