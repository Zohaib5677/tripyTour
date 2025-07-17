import React from 'react'
import Hero from '../components/Hero'
function About() {
    return (
        <>
        <Hero 
        cName="hero-mid"
        heroImg="night.jpg"
        title="About"
        // text="Explore the world with us"
        // buttontext="travel plan"
        // url="/"
        btnClass="hide"
        ></Hero>
        <div className="about-content" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.7' }}>
            <h2>Who We Are</h2>
            <p>
                Welcome to TripyTour! We are passionate about helping you explore the world with ease and excitement. Our mission is to provide unforgettable travel experiences, whether you are seeking adventure, relaxation, or cultural discovery. With a dedicated team and a wide range of destinations, we make planning your next trip simple and enjoyable.
            </p>
            <h2>Our Vision</h2>
            <p>
                We believe that travel broadens horizons and creates lifelong memories. Our vision is to connect people with the beauty and diversity of our planet, one journey at a time.
            </p>
            <h2>Why Choose Us?</h2>
            <ul style={{ textAlign: 'left', display: 'inline-block', margin: '1rem auto' }}>
                <li>Expertly curated destinations and experiences</li>
                <li>Personalized travel planning</li>
                <li>24/7 customer support</li>
                <li>Best price guarantee</li>
            </ul>
        </div>
        {/* You can further customize this section with images, team info, or testimonials! */}
        </>
       ) 
}

export default About