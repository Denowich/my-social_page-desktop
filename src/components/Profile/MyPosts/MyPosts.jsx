import React from 'react';
import style from './MyPosts.module.css';
import { Posts } from '../Posts/Posts';

export const MyPosts = () => {
      let postsData = [
            { id: 1, message: 'Hi!', likesCount: 5 },
            { id: 2, message: 'This is my first post!', likesCount: 12 },
      ];
      return (
            <div className={style.myPosts}>
                  <h3>My Posts</h3>
                  <div>
                        <div>
                              <textarea></textarea>
                        </div>
                        <div>
                              <button>Add post</button>
                        </div>
                  </div>
                  <div className={style.posts}>
                        <Posts
                              message={postsData[0].message}
                              likesCount={postsData[0].likesCount}
                        />
                        <Posts
                              message={postsData[1].message}
                              likesCount={postsData[1].likesCount}
                        />
                  </div>
            </div>
      );
};
