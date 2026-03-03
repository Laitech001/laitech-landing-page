import './about.css'
import { MessageCircle } from 'lucide-react'

function CallToAction() {

  const whatsappLink = "https://wa.me/2347062639160?text=Hello%20LAITECH%20I%20want%20to%20build%20a%20website"

  return (
    <div className="call-to-action">
      <h2>Ready to Transform Your Business?</h2>
      <p>Contact us today to learn how we can help you achieve your goals with our innovative solutions.</p>
      <a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
        <MessageCircle className="whatsapp-icon" />
        Get in Touch
      </a>
    </div>
  )
}

export default CallToAction