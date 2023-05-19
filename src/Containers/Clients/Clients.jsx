import { clientsData } from '../../Assets/Data'
import { clientsData2 } from '../../Assets/Data'
import { clientsData3 } from '../../Assets/Data'
import { ClientCard } from '../../Components'
import Slider from 'react-slick'
import React, { useState } from 'react'
import '../styles/Clients.sass'

const Clients = () => {
  const settingsSmall = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    cssEase: "linear"
  }

  const settingsMedium = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    cssEase: "linear"
  }

  const settingsLarge = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    cssEase: "linear"
  }

  const settingsSmall2 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    rtl: true
  }

  const settingsMedium2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    rtl: true
  }

  const settingsLarge2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    rtl: true
  }

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowSize(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  return (
    <div className='clients-container' id='Clients'>
      <div className='clients-layout'>
        {windowSize >= 992 ? (
          <Slider {...settingsLarge}>
            {clientsData.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </Slider>
        ) : windowSize >= 752 ? (
          <Slider {...settingsMedium}>
            {clientsData.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </Slider>
        ) : (
          <Slider {...settingsSmall}>
            {clientsData.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </Slider>
        )}
        <div className='clients-text'>
          {clientsData2.map((client) => (
            <section key={client.title}>
              <h1 className='clients-title'>{client.title}</h1>
              {client.paragraphs.map((paragraph, index) => (
                <p className='clients-paragraph' key={index}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        {windowSize >= 992 ? (
          <Slider {...settingsLarge2}>
            {clientsData3.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </Slider>
        ) : windowSize >= 752 ? (
          <Slider {...settingsMedium2}>
            {clientsData3.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </Slider>
        ) : (
          <Slider {...settingsSmall2}>
            {clientsData3.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  )
}

export default Clients
