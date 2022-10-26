import React from 'react';
import style from './Pagination.module.css';

function Pagination({ breeds, breedsPerPage, handleSetPage, currentPage }) {
  const numCal = [];
  for (let i = 1; i <= Math.ceil(breeds.length / breedsPerPage); i++) {
    numCal.push(i);
  }
  return (
    <>
      <div className={style.nums}>
        <ul>
          {numCal.map((e) => {
            return (
              <li
                onClick={() => handleSetPage(e)}
                key={e}
                className={currentPage === e ? style.active : style.list}
              >
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.numsMobile}>
        <button
          onClick={() => handleSetPage(currentPage - 1)}
          className={`${currentPage ? style.active : style.list} ${
            currentPage === 1 ? style.noBUtton : ''
          }`}
        >
          Prev
        </button>
        <p>{currentPage}</p>
        <button
          onClick={() => handleSetPage(currentPage + 1)}
          className={currentPage ? style.active : style.list}
        >
          Next
        </button>
        <ul></ul>
      </div>
    </>
  );
}

export default Pagination;
