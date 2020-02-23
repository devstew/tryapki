import * as React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => {

  const shop = ' shop ';
  const contact = ' contact ';
  return(
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'/>
      </Link>

      <div className='options-container'>
        <Link to='/shop' className='option'>{shop.toUpperCase()}</Link>
        <Link to='/shop' className='option'>{contact.toUpperCase()}</Link>
      </div>
    </div>
  )
}

export default Header;