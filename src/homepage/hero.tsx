import './hero.css'
import heroImage from '../assets/hero-image.webp'
import {Link} from 'react-router'

function Hero() {

  const handleClick = () => {
    const phoneNumber = "2347062639160";
    const message = "Hello Laitech, I want to build a website.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

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
          <Link to="/about">
            <button className="learn-more-btn">Learn More</button>
          </Link>
          
          <button onClick={handleClick} className='contact-btn'>Contact Us</button>
        </div>
        
      </div>

    </div>
  )
}

export default Hero