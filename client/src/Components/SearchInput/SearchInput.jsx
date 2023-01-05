import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getByName } from '../../Redux/Actions';
import style from './SearchInput.module.css';
import { TfiSearch } from 'react-icons/tfi';

function SearchInput() {
  const [state, setState] = React.useState('');

  const dispatch = useDispatch();

  const breeds = useSelector((state) => state.breeds);
  // const firstFiveBreeds = state.slice(0, 5);
  const loading = useSelector((state) => state.loading);

  // console.log(firstFiveBreeds);

  function handleOnChange(e) {
    setState(e.target.value);
    dispatch(getByName(state));
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(state));
    setState('');
  };

  return (
    <div className={style.search}>
      <div className={`${style.searchBar} ${state && style.searchBarBorder}`}>
        <form onSubmit={handleOnSubmit}>
          <input
            type='text'
            name='name'
            onChange={(e) => handleOnChange(e)}
            value={state}
            placeholder='Search Breed...'
            className={style.input}
          />
          <button
            type='submit'
            className={style.buttonSearch}
            // onClick={dispatch(getByName(state))}
          >
            <TfiSearch />
          </button>
        </form>
      </div>
      {state && (
        <ul className={style.listSearch}>
          {loading ? (
            <li>Searching...</li>
          ) : !breeds.length ? (
            <li>Not found</li>
          ) : (
            breeds.map((t) => {
              return (
                <Link
                  to={`/home/${t.id}`}
                  key={t.id}
                  style={{ textDecoration: 'none' }}
                >
                  <li>{t.name}</li>
                </Link>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
