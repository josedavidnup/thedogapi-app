import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Favorites.module.css';
import redheart from '../../Assets/Images/red-heart.svg';
import { removeFavorites } from '../../Redux/Actions';
import DogLoaderPage from '../Loader/DogLoaderPage';
function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

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
              return (
                <article className={style.card} key={breed.id}>
                  <button
                    className={style.buttoncito}
                    onClick={() => dispatch(removeFavorites(breed.id))}
                  >
                    <img src={redheart} alt='like' className={style.delete} />
                  </button>
                  <Link
                    to={`/home/${breed.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <figure>
                      <img
                        src={breed.image}
                        alt={breed.name}
                        className={style.image}
                      />
                    </figure>
                    <div className={style.cardContent}>
                      <h2 className={`${style.cardTitle}  ${style.text}`}>
                        {breed.name}
                      </h2>
                      <div className={style.cardInfo}>
                        <p className={style.text}>
                          <span>Weight:</span> {breed.weight}
                        </p>
                        <p
                          className={`${style.cardTemperaments} ${style.text}`}
                        >
                          <span>Temperaments:</span> {breed.temperaments}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </section>
        </main>
      )}
    </>
  );
}

export default Favorites;
