import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllBreeds, getTemperaments } from '../../Redux/Actions';

import style from './Breeds.module.css';
import Pagination from '../Pagination/Pagination';
import Filter from '../Filters/Filter';
import DogLoaderPage from '../Loader/DogLoaderPage';
import BreedCard from '../BreedCard/BreedCard';
import Error from '../Error/Error';
function Breeds() {
  const breeds = useSelector((state) => state.breeds);

  const temperaments = useSelector((state) => state.temperaments);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
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

  return (
    <>
      {loading ? (
        <DogLoaderPage />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <Filter temperaments={temperaments} setCurrentPage={setCurrentPage} />
          <Pagination
            breeds={breeds}
            breedsPerPage={breedsPerPage}
            handleSetPage={handleSetPage}
            currentPage={currentPage}
          />
          <main className={style.mainDetail}>
            <section className={style.breeds}>
              {currentPages.map((breed) => {
                return <BreedCard breed={breed} key={breed.id} />;
              })}
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default Breeds;
