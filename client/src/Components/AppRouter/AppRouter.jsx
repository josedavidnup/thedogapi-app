import React from 'react';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import Menu from '../../Components/Menu/Menu';
import Breeds from '../../Components/Breeds/Breeds';
import BreedDetail from '../../Components/BreedDetail/BreedDetail.jsx';
import CreateBreed from '../../Components/CreateBreed/CreateBreed';
import Favorites from '../../Components/Favorites/Favorites';
import Footer from '../../Components/Footer/Footer';
import { Route } from 'react-router-dom';
import './AppRouter.css';

function AppRouter() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Menu} />
        <Route exact path='/home' component={Breeds} />
        <Route exact path='/home/:id' component={BreedDetail} />
        <Route exact path='/home/breed/favorites' component={Favorites} />
        <Route exact path='/home/breed/create' component={CreateBreed} />
      </div>
      <Route path='/home' component={Footer} />
    </div>
  );
}

export default AppRouter;
