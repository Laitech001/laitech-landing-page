import './devteam.css'

function DevTeamHero() {

  const whatsappLink = "https://wa.me/2347062639160?text=Hello%20LAITECH%20I%20want%20to%20build%20a%20website"

  return (
    <div className='hero-section'>

      <div className="hero-image">
        <img src="/src/assets/laitechdevLogo.png" alt="Hero Image" />
      </div>

      <div className="hero-content">
        <h1>We Turn Ideas Into Powerful Web Experiences</h1>
        <p>Laitech Dev Team specializes in building modern websites and web applications that are secure, responsive, and performance-driven — crafted to elevate brands and deliver real results</p>
        
        <a href={whatsappLink} target="_blank"
        rel="noopener noreferrer">
          Hire Us
        </a>
      </div>
    </div>
  )
}

export default DevTeamHero