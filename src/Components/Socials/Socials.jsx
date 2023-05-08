import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import '../styles/Socials.sass'

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://www.linkedin.com/company/globalinc/" className='icon'><BsLinkedin /></a>
      <a href="https://instagram.com/globalincok?igshid=OTJhZDVkZWE=" className='icon'><BsInstagram /></a>
    </div>
  )
}

export default Socials
