import './devteam.css'
import '../pages/servicesCard'
import {
  Wrench,
  Cloud,
  Globe,
  ShieldCheck,
} from "lucide-react";
import ServicesCard from '../pages/servicesCard';

function Service() {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "We build modern websites and web applications for businesses."
    },
    {
      icon: Wrench,
      title: "Phone Repair",
      description: "Fix software issues, unlock devices, and system errors."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud setup, storage solutions, and deployment."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Protect your business systems from threats."
    }
  ]
  return (
    <div className="service-section">
      <h1>Our Service</h1>
      <div className="service-grid">
        {services.map((item, index) => (
          <ServicesCard 
            key= {index}
            icon= {item.icon}
            title = {item.title}
            description = {item.description}
          />
        ))}
      </div>
    </div>
    
  )
}

export default Service