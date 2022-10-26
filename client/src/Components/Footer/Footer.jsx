import React from 'react';
import style from './Footer.module.css';
import i from '../../Assets/Images/icon-linkedin.png';
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerCreator}>
        <p>Created with 🧡 by José David</p>
      </div>
      <div className={style.footerDown}>
        <p>Follow me on</p>
        <a
          href='https://www.linkedin.com/in/josedavidnup/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={i} alt='' className={style.footerIcon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
