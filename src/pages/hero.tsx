import './hero.css'
import heroImage from '../assets/hero-image.png'

function Hero() {
  return (
    <div className="hero">
      <img 
        src={heroImage} 
        alt="Hero Image" 
      />
      <div className="hero-overlay">
        <h1>Your partner in technology solutions</h1>
        <p>Professional Tech solutions for your business. We build website, We sell Phone, and We fix Software Issue in phone</p>
        <div className='hero-buttons'>
          <button className="learn-more-btn">Learn More</button>
          <button className='contact-btn'>Contact Us</button>
        </div>
        
      </div>

    </div>
  )
}

export default Hero