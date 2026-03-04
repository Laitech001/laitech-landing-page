import './about.css'
import laptopHero from '../assets/pakata-goh-RDolnHtjVCY-unsplash.webp'

function AboutHero() {
  return (
    <div className="about-hero">
      <section className="text">
        <h1>
          Laitech professional technologists
        </h1>

        <p>
          We build a clean, structured and responsive website for your business, We also provide a good customer service to our clients. We sell good phones, laptop and accessories, and we do fix some software/Hardware issue either phone or laptop.
        </p>
      </section>

      <section className="image">
        <img src={laptopHero} alt="about hero" loading="lazy" />
      </section>
    </div>
  )
}

export default AboutHero