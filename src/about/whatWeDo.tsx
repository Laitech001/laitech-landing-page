import './about.css'
import '../pages/servicesCard'
import { Globe, Smartphone, ShieldCheck } from 'lucide-react'
import ServicesCard from '../pages/servicesCard'

function WhatWeDo() {
  const whatWeDo = [
    {
      icon: Globe,
      title: 'Smart Digital Solution',
      description: 'We create modern and responsive websites that help businesses grow online. From landing pages to product listings, we design every project with your brand in mind'
    }, {
      icon: Smartphone,
      title: 'Mobile Sales & Support',
      description: "We sell quality, verified phones and provide expert support. Whether you need a new device or help setting up iCloud and updates, we've got you convered."
    }, {
      icon: ShieldCheck,
      title: 'Tech & Cyber Services',
      description: "We help individuals and businesses stay safe and updated with today's technology, offering cybersecurity tips, system updates, and professional tech guideance."
    }
  ]

  return (
    <div className="what-we-do">
      <h1>What We Do</h1>

      <section className='what-we-do-items'>
        {whatWeDo.map((item, index) => (
          <ServicesCard 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  )
}

export default WhatWeDo