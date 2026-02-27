import './devteam.css'
import { MapPin, Mail, MessageCircle, PhoneCall} from 'lucide-react'

function Contact() {

  const whatsappLink = "https://wa.me/2347062639160?text=Hello%20LAITECH%20I%20want%20to%20build%20a%20website"

  return (
    <div className="contact">
      <h1>Contact Info:</h1>
      
      <ul>
        <li>
          <MapPin />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bida+Road+Minna+Niger+State+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bida Road, <br></br>Minna, Niger State, Nigeria.
          </a>
        </li>

        <li>
          <Mail /> 
          <a href="mailto:laitechdev@gmail.com">
            laitechdev@gmail.com
          </a>
        </li>

        <li>
          <MessageCircle /> 
          <button>
            <a href={whatsappLink} target="_blank"
            rel="noopener noreferrer">
              Chat on Whatsapp
            </a>
          </button>
        </li>

        <li>
          <PhoneCall />
          <a href="tel:+2347062639160">
            +234 706 263 9160
          </a>
        </li>
      </ul>

      <p><strong>Note:</strong> All Contact methods are clickable</p>
    </div>
  )
}

export default Contact