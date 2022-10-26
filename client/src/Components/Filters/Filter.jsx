import React from 'react';
import style from './Filter.module.css';
import a_z from '../../Assets/Images/a-z-order.png';
import z_a from '../../Assets/Images/z-a-order.png';
import weightUp from '../../Assets/Images/dog-weight-up.png';
import weightDown from '../../Assets/Images/dog-weight-down.png';
import reset from '../../Assets/Images/reset-filter.png';
import { useDispatch } from 'react-redux';
import {
  zaFilter,
  azFilter,
  getAllBreeds,
  temperamentFilter,
  weightFilterUp,
  weightFilterDown,
} from '../../Redux/Actions';

function Filter({ temperaments }) {
  const dispatch = useDispatch();

  return (
    <section className={style.filter}>
      <div className={style.titleContanier}>
        <h3 className={style.titleFilter}>Filters</h3>
        <p className={style.titleFilter}>
          You need to reset the filter once you click on one
        </p>
      </div>
      <div className={style.filterContainer}>
        <div className={style.filterUp}>
          <div>
            <div>
              <button
                onClick={() => dispatch(getAllBreeds())}
                className={style.buttonFilter}
              >
                <img src={reset} alt='z_a sort' className={style.imgFilter} />
              </button>
            </div>
          </div>
          <div>
            <div>
              <select
                className={`${style.containerSelect}`}
                name='temperaments'
                multiple={false}
                onChange={(e) => dispatch(temperamentFilter(e.target.value))}
              >
                <option value=''>Choose Temperament</option>
                {temperaments.map((e) => {
                  return (
                    <option key={e.name} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
              <span className={style.focus}></span>
            </div>
          </div>
        </div>
        <div className={style.filterDown}>
          <div>
            <button
              onClick={() => dispatch(azFilter())}
              className={style.buttonFilter}
            >
              <img src={a_z} alt='a_z sort' className={style.imgFilter} />
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch(zaFilter())}
              className={style.buttonFilter}
            >
              <img src={z_a} alt='z_a sort' className={style.imgFilter} />
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch(weightFilterUp())}
              className={style.buttonFilter}
            >
              <img src={weightUp} alt='z_a sort' className={style.imgFilter} />
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch(weightFilterDown())}
              className={style.buttonFilter}
            >
              <img
                src={weightDown}
                alt='z_a sort'
                className={style.imgFilter}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
