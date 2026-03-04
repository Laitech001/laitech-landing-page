import './devteam.css'
import '../pages/servicesCard'
import {
  Cloud,
  Globe,
  ShieldCheck,
  Layers,
  RefreshCcw,
  Zap,
  MousePointer,
  Layout
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
      icon: Layers,
      title: "Single Page Application",
      description: "Create fast, interactive web apps using React, Next.js, or similar frameworks."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimized websites for speed, SEO, and smooth user experience."
    },
    {
      icon: RefreshCcw,
      title: "Maintenance & Update",
      description: "Keep websites up-to-date with the latest web standards and security fixes."
    },
    {
      icon: MousePointer,
      title: "Interactive Features",
      description: "Buttons, forms, sliders, and dynamic components."
    },
    {
      icon: Layout,
      title: "UI/UX Implementation",
      description: "Converting designs into intuitive and user-friendly interfaces."
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