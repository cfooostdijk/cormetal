import { useState } from 'react'
import { categoriesData } from '../../Assets/Data'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'
import '../styles/NavBar.sass'
import Menu from '../Menu/Menu'


const NavBar = ({ headerHeight }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className='nabvar-container' >
      {isMobileMenuOpen && (
        <Menu categories={categoriesData.categories} headerHeight={headerHeight} handleLinkClick={handleLinkClick} />
      )}

      {isMobileMenuOpen ? ( <HiX className='mobile-menu-button' onClick={handleOnClick} /> ) :
                          ( <HiMenu className='mobile-menu-button' onClick={handleOnClick} /> )}

      <nav className='desktop-menu'>
        {categoriesData.categories.map((category, index) => (
          <Link key={index}
                activeClass='active'
                to={category.route}
                smooth={true}
                offset={-100}
                duration={500}
                className='list' >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
