import Slider from 'react-slick'
import { herosData } from '../../Assets/Data'
import '../styles/Hero.sass'

const Hero = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 4000,
    fade: true,
    arrows: false,
    slidesToScroll: 1
  }

  return (
    <div className='hero-container' id='Hero'>
      <Slider {...settings}>
        {herosData.map(hero => (
          <div className='hero-layout' key={hero.name}>
            <img className='hero-image' src={hero.image} alt={hero.name} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Hero
