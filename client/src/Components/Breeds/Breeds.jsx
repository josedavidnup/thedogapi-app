import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getAllBreeds,
  getFavorites,
  getTemperaments,
  removeFavorites,
} from '../../Redux/Actions';
import blackheart from '../../Assets/Images/black-heart.svg';
import redheart from '../../Assets/Images/red-heart.svg';
import style from './Breeds.module.css';
import Pagination from '../Pagination/Pagination';
import Filter from '../Filters/Filter';
import DogLoaderPage from '../Loader/DogLoaderPage';

function Breeds() {
  const breeds = useSelector((state) => state.breeds);
  const favorites = useSelector((state) => state.favorites);
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const [breedsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * breedsPerPage;
  const firstIndex = lastIndex - breedsPerPage;
  const currentPages = breeds.slice(firstIndex, lastIndex);
  const handleSetPage = (num) => setCurrentPage(num);

  useEffect(() => {
    dispatch(getAllBreeds());
    dispatch(getTemperaments());
  }, [dispatch]);

  function favoriteBreed(id) {
    return favorites.find((e) => e.id === id) ? true : false;
  }

  return (
    <>
      {!currentPages.length ? (
        <DogLoaderPage />
      ) : (
        <div>
          <Filter temperaments={temperaments} />
          <Pagination
            breeds={breeds}
            breedsPerPage={breedsPerPage}
            handleSetPage={handleSetPage}
            currentPage={currentPage}
          />
          <main className={style.mainDetail}>
            <section className={style.breeds}>
              {currentPages.map((breed) => {
                return (
                  <article className={style.card} key={breed.id}>
                    <button
                      className={style.buttoncito}
                      onClick={() =>
                        !favoriteBreed(breed.id)
                          ? dispatch(getFavorites(breed))
                          : dispatch(removeFavorites(breed.id))
                      }
                    >
                      {favoriteBreed(breed.id) ? (
                        <img
                          src={redheart}
                          alt='like'
                          className={style.delete}
                        />
                      ) : (
                        <img
                          src={blackheart}
                          alt='dislike'
                          className={style.delete}
                        />
                      )}
                    </button>
                    <figure>
                      <img
                        src={breed.image}
                        alt={breed.name}
                        className={style.image}
                      />
                    </figure>
                    <Link
                      to={`/home/${breed.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className={style.cardContent}>
                        <h2 className={`${style.cardTitle}  ${style.text}`}>
                          {breed.name}
                        </h2>
                        <div className={style.cardInfo}>
                          <div className={style.text}>
                            <h4>Weight:</h4> {breed.weight}
                          </div>
                          <div
                            className={`${style.cardTemperaments} ${style.text}`}
                          >
                            <h4>Temperaments:</h4> <p>{breed.temperaments}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default Breeds;
