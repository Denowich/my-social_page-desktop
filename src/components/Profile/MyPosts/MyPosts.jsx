import React from 'react';
import style from './MyPosts.module.css';
import { Posts } from '../Posts/Posts';

export const MyPosts = () => {
      let posts = [
            { id: 1, message: 'Hi!', likesCount: 5 },
            { id: 2, message: 'This is my first post!', likesCount: 12 },
      ];

      let postsElments = posts.map((p) => (
            <Posts message={p.message} likesCount={p.likesCount} />
      ));

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
                  <div className={style.posts}>{postsElments}</div>
            </div>
      );
};
