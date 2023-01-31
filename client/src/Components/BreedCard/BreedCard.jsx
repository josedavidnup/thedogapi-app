import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavorites, removeFavorites } from '../../Redux/Actions';
import style from './BreedCard.module.css';
import { FcLike } from 'react-icons/fc';
import { FcDislike } from 'react-icons/fc';
function BreedCard({ breed }) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  function favoriteBreed(id) {
    return favorites.find((e) => e.id === id) ? true : false;
  }
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
        {favoriteBreed(breed.id) ? <FcDislike /> : <FcLike />}
      </button>
      <figure>
        <img src={breed.image} alt={breed.name} className={style.image} />
      </figure>
      <Link to={`/home/${breed.id}`} style={{ textDecoration: 'none' }}>
        <div className={style.cardContent}>
          <h2 className={`${style.cardTitle}  ${style.text}`}>{breed.name}</h2>
          <div className={style.cardInfo}>
            <div className={style.text}>
              <h4>Weight:</h4> {breed.weight}
            </div>
            <div className={`${style.cardTemperaments} ${style.text}`}>
              <h4>Temperaments:</h4> <p>{breed.temperaments}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BreedCard;
