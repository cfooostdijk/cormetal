import { ServiceList } from '../../Components'
import '../styles/Services.sass'

const Services = () => {
  return (
    <div className='services-container' id='Services'>
      <div className='services-layout'>
        <ServiceList />
      </div>
    </div>
  )
}

export default Services
