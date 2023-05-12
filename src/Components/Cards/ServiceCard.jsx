import '../styles/ServiceCard.sass'

const ServiceCard = ({ service }) => {
  return (
    <div className='service-card' style={{ backgroundImage: `url(${service.image})` }}>
      <img src={service.icon} className='service-card-icon' alt='' />
      <h2 className='service-card-title'>{service.title}</h2>
    </div>
	)
}

export default ServiceCard
