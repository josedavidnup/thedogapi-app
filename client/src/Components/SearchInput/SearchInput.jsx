import React from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../Redux/Actions';
import style from './SearchInput.module.css';

function SearchInput() {
  const [state, setState] = React.useState('');

  const dispatch = useDispatch();

  function handleOnChange(e) {
    setState(e.target.value);
    dispatch(getByName(state));
  }

  return (
    <form className={style.searchBar}>
      <input
        type='text'
        name='name'
        id=''
        onChange={(e) => handleOnChange(e)}
        value={state}
        placeholder='Search Breed...'
        className={style.input}
      />
    </form>
  );
}

export default SearchInput;
