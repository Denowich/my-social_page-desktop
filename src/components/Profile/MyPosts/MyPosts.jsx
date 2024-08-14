import React from 'react';
import style from './MyPosts.module.css';
import { Posts } from '../Posts/Posts';

export const MyPosts = () => {
      return (
            <div className={style.myPosts}>
                  <div>
                        <h3>My Posts</h3>
                  </div>
                  <div>
                        <textarea></textarea>
                  </div>
                  <div>
                        <button>Add post</button>
                  </div>
                  <Posts message={'Hi!'} likesCount={5} />
                  <Posts message={'This is my first post!'} likesCount={12} />
            </div>
      );
};
