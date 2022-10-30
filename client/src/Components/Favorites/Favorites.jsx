import React from 'react';
import { useSelector } from 'react-redux';
import style from './Favorites.module.css';
import DogLoaderPage from '../Loader/DogLoaderPage';
import BreedCard from '../BreedCard/BreedCard';

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      {!favorites ? (
        <DogLoaderPage />
      ) : !favorites.length ? (
        <div className={style.title}>
          <h1>No favorites yet</h1>
        </div>
      ) : (
        <main className={style.favortiesBreed}>
          <section className={style.breeds}>
            {favorites.map((breed) => {
              return <BreedCard breed={breed} key={breed.id} />;
            })}
          </section>
        </main>
      )}
    </>
  );
}

export default Favorites;
