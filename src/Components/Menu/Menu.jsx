import { Link } from 'react-scroll'
import '../styles/Menu.sass'

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-layout'>
        <div>
          <Link activeClass="active" to="HeroTop" smooth={true} offset={-70} duration={500} className="menu-title">
            Quienes somos?
          </Link>
          <p className='menu-paragraph'>Nostros</p>
          <p className='menu-paragraph'>Nuestro origen</p>
        </div>
        <div>
          <Link activeClass="active" to="Services" smooth={true} offset={-70} duration={500} className="menu-title">
            Que hacemos?
          </Link>
          <p className='menu-paragraph'>Servicios</p>
          <p className='menu-paragraph'>Productos</p>
        </div>
        <div>
          <Link activeClass="active" to="Clients" smooth={true} offset={-70} duration={500} className="menu-title">
            Clientes?
          </Link>
          <p className='menu-paragraph'>Campo</p>
          <p className='menu-paragraph'>Puerto</p>
          <p className='menu-paragraph'>Miscelaneos</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
