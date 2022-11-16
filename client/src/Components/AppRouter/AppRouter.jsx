import React from 'react';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import Menu from '../../Components/Menu/Menu';
import Breeds from '../../Components/Breeds/Breeds';
import BreedDetail from '../../Components/BreedDetail/BreedDetail.jsx';
import CreateBreed from '../../Components/CreateBreed/CreateBreed';
import Favorites from '../../Components/Favorites/Favorites';
import Footer from '../../Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './AppRouter.css';

function AppRouter() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Breeds />} />
          <Route path='/home' element={<Menu />} />
          <Route path='/home/:id' element={<BreedDetail />} />
          <Route path='/home/breed/favorites' element={<Favorites />} />
          <Route path='/home/breed/create' element={<CreateBreed />} />
          <Route path='*/home' element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRouter;
