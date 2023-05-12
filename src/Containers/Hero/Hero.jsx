import { herosData } from '../../Assets/Data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
      <div className='hero-layout'>
        <Slider {...settings}>
          {herosData.map(hero => (
            <div className="hero-slide">
              <img className='hero-image' src={hero.image} alt={hero.name} />
              <div className='hero-text'>
                <h1>{hero.title}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
