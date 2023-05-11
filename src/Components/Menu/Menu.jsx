import { Link } from 'react-scroll'
import '../styles/MobileMenu.sass'

const MobileMenu = ({ categories, headerHeight, handleLinkClick }) => {
  return (
    <nav className='mobile-menu' style={{ top: `calc(${headerHeight}px - 1px)` }}>
      {categories.map((category, index) => (
        <Link key={index}
              activeClass='active'
              to={category.route}
              smooth={true}
              offset={-100}
              duration={500}
              className='list'
              onClick={handleLinkClick} >
          {category.name}
        </Link>
      ))}
    </nav>
  )
}

export default MobileMenu
