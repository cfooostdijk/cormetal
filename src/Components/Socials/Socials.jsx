import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import '../styles/Socials.sass'

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://www.linkedin.com/in/fernando-mario-oostdijk-146936138" className='icon'><BsLinkedin /></a>
      <a href="https://instagram.com/fer.oostdijk" className='icon'><BsInstagram /></a>
    </div>
  )
}

export default Socials
