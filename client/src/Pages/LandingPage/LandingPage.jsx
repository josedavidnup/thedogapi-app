import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DogLoader from '../../Components/Loader/DogLoader';
import style from './LandingPage.module.css';

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === '/') {
      return navigate('/landing');
    }
  }, [navigate]);

  return (
    <>
      <main className={style.landing}>
        <div>
          <DogLoader />
        </div>
        <div>
          <Link to={`/home`} style={{ textDecoration: 'none' }}>
            <p className={style.start}>Start</p>
          </Link>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
