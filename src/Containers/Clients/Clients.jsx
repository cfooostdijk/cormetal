import { clientsData } from '../../Assets/Data'
import { clientsData2 } from '../../Assets/Data'
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

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    rtl: true
  }

  return (
    <div className='clients-container' id='Clients'>
      <div className='clients-layout'>
        <Slider {...settings}>
          {clientsData.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </Slider>
        <div className='clients-paragraph'>
          {clientsData2.map((client) => (
            <section key={client.title}>
              <h1>{client.title}</h1>
              {client.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        <Slider {...settings2}>
          {clientsData.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Clients
