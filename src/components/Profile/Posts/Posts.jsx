import React from 'react';
import style from './Posts.module.css';

export const Posts = (props) => {
      return (
            <div className={style.posts}>
                  <div className={style.item}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RiSd2p256bROWyeqIOqebopStY3uU49A5Utl73sEevoED-ZirA-32OY3hI4txpXUbf8&usqp=CAU' />
                        {props.message}
                        <h5>likes: {props.likesCount}</h5>
                  </div>
            </div>
      );
};
