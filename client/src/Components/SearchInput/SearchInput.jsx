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
        </form>
        <button type='submit' className={style.buttonSearch}>
          <TfiSearch />
        </button>
      </div>
      {state && (
        <ul className={style.listSearch}>
          {!breeds.length ? (
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
