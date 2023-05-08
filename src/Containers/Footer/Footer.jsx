import { Copyright, Contact, Menu, Logo, Socials } from '../../Components'
import '../styles/Footer.sass'

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className='footer-layout' >
        <Logo />
        <Contact />
        <Menu />
        <Socials />
        <Copyright />
      </div>
    </div>
  )
}

export default Footer
