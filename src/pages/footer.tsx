import './footer.css'
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <div className="footer">
      <div className='contact-us'>
        <div className='contact-item'>
          <Mail size={24} />
          <span>contact@laitech.com</span>
        </div>

        <div className='contact-item'>
          <MapPin size={24} />
          <span>No 1. Dama juction, Minna, Nigeria</span>
        </div>

        <div className='contact-item'>
          <Phone size={24} />
          <span>+2347062639160</span>
        </div>
      </div>

      <p>&copy; 2026 Laitech. All rights reserved.</p>

    </div>
  )
}

export default Footer