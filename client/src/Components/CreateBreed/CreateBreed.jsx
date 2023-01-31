import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, createBreed } from '../../Redux/Actions';
import style from './CreateBreed.module.css';
import { validator } from '../../helpers/validator';

function CreateBreed() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = React.useState({
    name: '',
    min_height: '',
    max_height: '',
    min_weight: '',
    max_weight: '',
    min_life_span: '',
    max_life_span: '',
    image: '',
    temperaments: [],
  });
  const [form, setForm] = React.useState({
    name: '',
    min_height: '',
    max_height: '',
    min_weight: '',
    max_weight: '',
    min_life_span: '',
    max_life_span: '',
    image: '',
    temperaments: [],
  });

  const handleOnChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    setErrors(
      validator({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const addTemperaments = (name) => {
    setForm({
      ...form,
      temperaments: [...form.temperaments, name],
    });
    console.log(form.temperaments);
    setErrors(validator(form.temperaments));
  };
  const handleDelete = (e) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter(
        (t) => t !== e.target.innerHTML.split(' <b>✖</b>').join('')
      ),
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      ![
        form.name,
        form.min_height,
        form.max_height,
        form.min_weight,
        form.max_weight,
      ].every(Boolean)
    ) {
      return alert('You should fill all inputs require');
    }
    dispatch(createBreed(form));
    setForm({
      name: '',
      min_height: '',
      max_height: '',
      min_weight: '',
      max_weight: '',
      min_life_span: '',
      max_life_span: '',
      image: '',
      temperaments: [],
    });
  };

  useEffect(() => {
    !temperaments.length && dispatch(getTemperaments());
  }, [dispatch, temperaments]);

  return (
    <section className={style.formContainer}>
      <form onSubmit={handleOnSubmit} className={style.form}>
        <div className={style.inputContainerName}>
          <label htmlFor='' className={style.labelForm}>
            Name*
          </label>
          <input
            className={`${style.inputName}`}
            key='name'
            type='text'
            name='name'
            value={form.name}
            onChange={handleOnChange}
          />
        </div>
        <div className={style.inputContainer}>
          <div>
            <label htmlFor='' className={style.labelForm}>
              Min height*
            </label>
            <input
              className={`${style.input} `}
              key='min_height'
              type='number'
              name='min_height'
              value={form.min_height}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor='' className={style.labelForm}>
              Max height*
            </label>
            <input
              className={`${style.input} `}
              key='max_height'
              type='number'
              name='max_height'
              value={form.max_height}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={style.inputContainer}>
          <div>
            <label htmlFor='' className={style.labelForm}>
              Min weight*
            </label>
            <input
              className={`${style.input} `}
              key='min_weight'
              type='number'
              name='min_weight'
              value={form.min_weight}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='' className={style.labelForm}>
              Max weight*
            </label>
            <input
              className={`${style.input} `}
              key='max_weight'
              type='number'
              name='max_weight'
              value={form.max_weight}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={style.inputContainer}>
          <div>
            <label htmlFor='' className={style.labelForm}>
              Min life span
            </label>
            <input
              className={`${style.input}`}
              key='min_life_span'
              type='number'
              name='min_life_span'
              value={form.min_life_span}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='' className={style.labelForm}>
              Max life span
            </label>
            <input
              className={`${style.input}`}
              key='max_life_span'
              type='number'
              name='max_life_span'
              value={form.max_life_span}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={style.inputContainerImage}>
          <div>
            <label htmlFor='' className={style.labelForm}>
              Image
            </label>
            <input
              className={style.inputImage}
              key='image'
              type='text'
              name='image'
              value={form.image}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div>
          <p htmlFor='standard-select' className={style.chooseTemperaments}>
            Choose temperaments*
          </p>
          <div className={`${style.containerSelect}`}>
            <select
              id='standard-select'
              name='temperaments'
              multiple={false}
              onChange={(e) =>
                form.temperaments.includes(e.target.value)
                  ? alert('Ya existe')
                  : addTemperaments(e.target.value)
              }
            >
              {temperaments?.map((e) => {
                return <option key={e.name}>{e.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={style.form_section}>
          {form.temperaments?.map((e) => (
            <i value={e} key={e} onClick={handleDelete}>
              {e} <b>✖</b>
            </i>
          ))}
        </div>
        {errors.name && <p className={style.danger}>{errors.name}</p>}
        {errors.max_height && (
          <p className={style.danger}>{errors.max_height}</p>
        )}
        {errors.max_weight && (
          <p className={style.danger}>{errors.max_weight}</p>
        )}
        {errors.max_life_span && (
          <p className={style.danger}>{errors.max_life_span}</p>
        )}
        {errors.temperaments && (
          <p className={style.danger}>{errors.temperaments}</p>
        )}
        <button type='submit' className={style.footerButton}>
          Create
        </button>
      </form>
    </section>
  );
}
export default CreateBreed;
