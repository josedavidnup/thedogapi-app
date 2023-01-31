import React from 'react';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import Menu from '../../Components/Menu/Menu';
import Breeds from '../../Components/Breeds/Breeds';
import BreedDetail from '../../Components/BreedDetail/BreedDetail.jsx';
import CreateBreed from '../../Components/CreateBreed/CreateBreed';
import Favorites from '../../Components/Favorites/Favorites';
import Footer from '../../Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AppRouter.css';
import Error from '../Error/Error';
function AppRouter() {
  return (
    <div className='page-container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/home' element={<Breeds />} />
          <Route path='/home/:id' element={<BreedDetail />} />
          <Route path='/home/favorites' element={<Favorites />} />
          <Route path='/home/create' element={<CreateBreed />} />
          <Route path='*' element={<Error />} />
          <Route path='*/home' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default AppRouter;
