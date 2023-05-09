import { Link } from 'react-scroll';
import { categoriesData } from '../../Containers/Header/HeaderData';
import '../styles/Menu.sass';

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-layout'>
        {categoriesData.categories.slice(0, -1).map((category, index) => (
          <div>
            <Link key={index} activeClass='active' to={category.route} smooth={true} offset={-100} duration={500} className='menu-title'>
              {category.name}
            </Link>
            <div>
              <Link key={index} activeClass='active' to={category.route} smooth={true} offset={-100} duration={500} className='menu-subtitle'>
                {category.subname1}
              </Link>
              <Link key={index} activeClass='active' to={category.route} smooth={true} offset={-100} duration={500} className='menu-subtitle'>
                {category.subname2}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
