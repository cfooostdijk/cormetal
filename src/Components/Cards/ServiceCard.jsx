import '../styles/ServiceCard.sass'

const ServiceCard = ({ service }) => {
  return (
    <div className='service-card' style={{ backgroundImage: `url(${service.image})` }} >
      <img src={service.icon} className='service-card-icon' alt='icon'/>
      <p className='service-card-paragraph'>{service.paragraph}</p>
    </div>
	)
}

export default ServiceCard
