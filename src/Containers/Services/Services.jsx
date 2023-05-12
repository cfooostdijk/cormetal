import { servicesData } from '../../Assets/Data'
import ServiceCard from '../../Components/Cards/ServiceCard'
import '../styles/Services.sass'

const Services = () => {
  return (
    <div className='services-container' id='Services'>
      <div className='services-layout'>
        {servicesData.services.map((service) => (
          <ServiceCard
            key={service.id} service={service}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
