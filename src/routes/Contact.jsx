import React from 'react'
import Hero from '../components/Hero'
function Contact() {
  return (
    <>
    <Hero 
    cName="hero-mid"
    heroImg="2.jpg"
    title="Contact"
    // text="Explore the world with us"
    // buttontext="travel plan"
    // url="/"
    btnClass="hide"
    ></Hero>
    <div className="contact-form-container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contact with me</h2>
      <form onSubmit={e => { e.preventDefault(); alert('Thank you for contacting us!'); }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name</label>
          <input type="text" id="name" name="name" required style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email</label>
          <input type="email" id="email" name="email" required style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem' }}>Message</label>
          <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        </div>
        <button type="submit" style={{ width: '100%', padding: '.75rem', borderRadius: '4px', background: '#007bff', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
    {/* You can connect this form to an email service or backend for real submissions. */}
    </>
   ) 
}

export default Contact