import React from 'react';
import style from './DogLoader.module.css';
import { Link } from 'react-router-dom';
function DogLoader() {
  return (
    <div className={style.loader}>
      <div className={style.dog}>
        <div className={style.dog_body}>
          <div className={style.dog_tail}>
            <div className={style.dog_tail}>
              <div className={style.dog_tail}>
                <div className={style.dog_tail}>
                  <div className={style.dog_tail}>
                    <div className={style.dog_tail}>
                      <div className={style.dog_tail}>
                        <div className={style.dog_tail}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.dog_torso}></div>
        <div className={style.dog_head}>
          <div className={style.dog_ears}>
            <div className={style.dog_ear}></div>
            <div className={style.dog_ear}></div>
          </div>
          <div className={style.dog_eyes}>
            <div className={style.dog_eye}></div>
            <div className={style.dog_eye}></div>
          </div>
          <div className={style.dog_muzzle}>
            <div className={style.dog_tongue}></div>
          </div>
        </div>
      </div>
      <Link to={`/Home`}>
        <div className={style.ball} tabIndex='0'></div>
      </Link>
    </div>
  );
}

export default DogLoader;
