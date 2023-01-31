import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getFavorites,
  removeFavorites,
  // getBreedDetail,
} from '../../Redux/Actions';
import axios from 'axios';
import style from './BreedDetail.module.css';
import { FcLike } from 'react-icons/fc';
import { FcDislike } from 'react-icons/fc';
import { BiArrowBack } from 'react-icons/bi';
import DogLoaderPage from '../Loader/DogLoaderPage';

function BreedDetail() {
  const [breed, setBreed] = React.useState({});
  // const breedDetail = useSelector((state) => state.breedDetail);
  const favorites = useSelector((state) => state.favorites);
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useNavigate();

  async function getBreedDetail(id) {
    try {
      const breed = await axios.get(`/api/dogs/${id}`);
      return setBreed(breed.data);
    } catch (error) {
      console.log('Error', error.message);
      console.log(`Error: ${error.response.data}`);
    }
  }

  // useEffect(() => {
  //   dispatch(getBreedDetail(id));
  // }, [dispatch, id]);

  useEffect(() => {
    getBreedDetail(id);
    return () => {
      getBreedDetail(id);
    };
  }, [id]);

  // function favoriteBreed(id) {
  //   return favorites.find((e) => e.id === id) ? true : false;
  // }
  function favoriteBreed(id) {
    return favorites.find((e) => e.id === id) ? true : false;
  }

  return (
    // <main>
    //   <section className={style.breeds}>
    //     <article className={style.card} key={breedDetail.id}>
    //       <button
    //         className={style.buttoncito}
    //         onClick={() =>
    //           !favoriteBreed(breedDetail.id)
    //             ? dispatch(getFavorites(breedDetail))
    //             : dispatch(removeFavorites(breedDetail.id))
    //         }
    //       >
    //         {favoriteBreed(breedDetail.id) ? (
    //           <img src={redheart} alt='like' className={style.delete} />
    //         ) : (
    //           <img src={blackheart} alt='dislike' className={style.delete} />
    //         )}
    //       </button>
    //       <figure>
    //         <img
    //           src={breedDetail.image}
    //           alt={breedDetail.name}
    //           className={style.image}
    //         />
    //       </figure>
    //       <div className={style.cardContent}>
    //         <h2 className={`${style.cardTitle}  ${style.text}`}>
    //           {breedDetail.name}
    //         </h2>
    //         <div className={style.cardInfo}>
    //           <p className={style.text}>
    //             <span>Weight:</span> {breedDetail.weight}
    //           </p>
    //           <p className={`${style.cardTemperaments} ${style.text}`}>
    //             <span>Temperaments:</span> {breedDetail.temperaments}
    //           </p>
    //         </div>
    //       </div>
    //     </article>
    //   </section>
    // </main>
    <>
      {Object.keys(breed).length === 0 ? (
        <DogLoaderPage />
      ) : (
        <>
          <main className={style.mainDetail}>
            <article className={style.card} key={breed.id}>
              <button
                className={style.buttoncitoBack}
                onClick={() => history(-1)}
              >
                <BiArrowBack />
              </button>
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
                  <p className={`${style.cardTemperaments} ${style.text}`}>
                    <span>Temperaments:</span> {breed.temperaments}
                  </p>
                  <p className={`${style.cardTemperaments} ${style.text}`}>
                    <span>Height:</span> {breed.height}
                  </p>
                  <p className={`${style.cardTemperaments} ${style.text}`}>
                    <span>Span Life:</span> {breed.life_span}
                  </p>
                </div>
              </div>
            </article>
          </main>
        </>
      )}
    </>
  );
}

export default BreedDetail;
