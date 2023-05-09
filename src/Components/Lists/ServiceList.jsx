import { servicesData } from '../../Assets/Data'
import ServiceCard from '../Cards/ServiceCard'
import '../styles/ServiceList.sass'

const ServiceList = () => {
  return (
    <div className='service-list'>
      {servicesData.services.map((service) => (
        <ServiceCard
          key={service.id} service={service}
        />
      ))}
    </div>
  )
}

export default ServiceList
