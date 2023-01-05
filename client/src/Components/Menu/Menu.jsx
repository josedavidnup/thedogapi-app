import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/favicon.png';
import SearchInput from '../SearchInput/SearchInput';
import style from './Menu.module.css';

function Menu() {
  return (
    <header className={style.menu}>
      <Link to={`/`} style={{ textDecoration: 'none' }}>
        <figure>
          <img src={logo} alt='dog-icon' />
        </figure>
      </Link>
      <nav className={style.navBar}>
        <ul>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <li className={style.lis}>Start</li>
          </Link>
          <Link to={`/home`} style={{ textDecoration: 'none' }}>
            <li className={style.lis}>Home</li>
          </Link>
          <Link to={`/home/favorites`} style={{ textDecoration: 'none' }}>
            <li className={style.lis}>Favorites</li>
          </Link>
          <Link to={`/home/create`} style={{ textDecoration: 'none' }}>
            <li className={style.lis}>Create</li>
          </Link>
        </ul>
      </nav>
      <SearchInput />
    </header>
  );
}

export default Menu;
