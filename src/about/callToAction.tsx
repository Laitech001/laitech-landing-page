import './about.css'
import { MessageCircle } from 'lucide-react'

function CallToAction() {
  return (
    <div className="call-to-action">
      <h2>Ready to Transform Your Business?</h2>
      <p>Contact us today to learn how we can help you achieve your goals with our innovative solutions.</p>
      <button>
        <MessageCircle className="whatsapp-icon" />
        Get in Touch
      </button>
    </div>
  )
}

export default CallToAction