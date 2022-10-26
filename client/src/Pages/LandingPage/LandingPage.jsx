import React from 'react';
import { Link } from 'react-router-dom';
import DogLoader from '../../Components/Loader/DogLoader';
import i from '../../Assets/Images/icon-linkedin.png';
import style from './LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <main className={style.landing}>
        <div className={style.landingMain}>
          <div>
            <DogLoader />
          </div>
          <div>
            <Link to={`/home`} style={{ textDecoration: 'none' }}>
              <p className={style.start}>Start</p>
            </Link>
          </div>
        </div>
        <footer className={style.footer}>
          <div>
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
      </main>
    </>
  );
}

export default LandingPage;
