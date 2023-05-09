import logoSmall from '../../Assets/LogoSmall.avif'
import logoMedium from '../../Assets/LogoMedium.avif'
import logoLarge from '../../Assets/LogoLarge.avif'
import '../styles/Logo.sass'
import { Link } from 'react-scroll'

const Logo = () => {
  return (
    <div className='logo-container' >
      <img
        className='logo-image'
        src={logoSmall}
        srcSet={`${logoSmall} 480w, ${logoMedium} 800w, ${logoLarge} 1200w`}
        sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 33vw"
        alt='Logo'
      />
    </div>
  )
}

export default Logo
