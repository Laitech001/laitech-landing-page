import type { ComponentType, SVGProps } from "react"

type ServiceCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>,
  title: string,
  description: string
}

function ServicesCard({icon: Icon, title, description}: ServiceCardProps) {
  return (
    <div className="service-card">
      <Icon size={40} className='service-icon'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServicesCard