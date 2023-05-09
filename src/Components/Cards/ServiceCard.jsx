import '../styles/ServiceCard.sass'

const ServiceCard = ({ service }) => {
  return (
    <div className='service-card' style={{ backgroundImage: `url(${service.image})` }} >
      <h3 className='service-card-title'>{service.name}</h3>
      <p className='service-card-paragraph'>{service.paragraph}</p>
    </div>
	)
}

export default ServiceCard
