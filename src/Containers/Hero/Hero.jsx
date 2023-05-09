import HeroTitle from '../../Components/Titles/HeroTitle'
import '../styles/Hero.sass'

const Hero = () => {
  return (
    <div className='hero-container' id='Hero'>
      <div className='hero-layout'>
        <HeroTitle />
      </div>
    </div>
  )
}

export default Hero
