import { useEffect, useState } from 'react'
import { Logo, NavBar } from '../../Components'
import '../styles/Header.sass'

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setHeaderHeight(document.querySelector('.header-layout').offsetHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [headerHeight])

  return (
    <div className='header-container' >
      <div className='header-layout' >
        <Logo />
        <NavBar headerHeight={headerHeight} />
      </div>
    </div>
  )
}

export default Header
