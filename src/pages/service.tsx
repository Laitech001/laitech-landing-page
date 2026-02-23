import ServicesCard from "./servicesCard"
import {
  Wrench,
  Smartphone,
  Cloud,
  Globe,
  ShieldCheck,
  Apple
} from "lucide-react";

function Service() {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "We build modern websites and web applications for businesses."
    },
    {
      icon: Smartphone,
      title: "Phone Sales",
      description: "Buy quality smartphones at affordable prices."
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
      icon: Apple,
      title: "iPhone Services",
      description: "iCloud unlock, setup, and troubleshooting."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Protect your business systems from threats."
    }
  ]
  return (
    <div className="service">
      {services.map((service, index) => (
        <ServicesCard 
          key= {index}
          icon= {service.icon}
          title = {service.title}
          description = {service.description}
        />
      ))}
    </div>
  )
}

export default Service