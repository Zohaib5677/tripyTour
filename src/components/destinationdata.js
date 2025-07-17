import React from 'react'
import { UNSAFE_WithComponentProps } from 'react-router-dom'

class destinationData extends components{

    render()
    {
        return (
            <div className='destination'>
                <h1>Popular Destination</h1>
                <p>tours give yiy the opprtunity</p>
                Destination
                <div className="first-des">
                    <div className="des-text">
                        <h2>tall volcani</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil, voluptate alias asperiores voluptatibus ex. In laboriosam praesentium neque! Nulla ad necessitatibus earum pariatur minus molestias cupiditate, provident omnis ipsam?</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil, voluptate alias asperiores voluptatibus ex. In laboriosam praesentium neque! Nulla ad necessitatibus earum pariatur minus molestias cupiditate, provident omnis ipsam?</p>
                    </div>
                    <div className="image">
                        <img src="1.jpg" alt="image" />
                        <img src="2.jpg" alt="image" />
                        {/* <img src="1.jpg" alt="image" /> */}
                    </div>
                </div>
            </div>
          )
    }
}

export default destinationdata