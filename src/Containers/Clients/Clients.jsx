import { clientsData } from '../../Assets/Data'
import { ClientCard } from '../../Components'
import Slider from 'react-slick'
import '../styles/Clients.sass'

const Clients = () => {
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
    <div className='clients-container' id='Clients'>
      <div className='clients-layout'>
        <Slider {...settings}>
          {clientsData.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Clients
