import { clientsData } from '../../Assets/Data'
import ClientCard from '../Cards/ClientCard'
import Slider from 'react-slick'

const ClientList = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    cssEase: "linear"
  }

  return (
    <div className='client-list'>
      <Slider {...settings}>
        {clientsData.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </Slider>
    </div>
  )
}

export default ClientList
