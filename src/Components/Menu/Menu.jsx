import { Link } from 'react-scroll'
import '../styles/Menu.sass'

const Menu = ({ categories, headerHeight, handleLinkClick }) => {
  return (
    <nav className='menu'>
      {categories.map((category, index) => (
        <Link key={index}
              activeClass='active'
              to={category.route}
              smooth={true}
              offset={headerHeight * -1}
              duration={500}
              className='list'
              onClick={handleLinkClick}>
          {category.name}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
