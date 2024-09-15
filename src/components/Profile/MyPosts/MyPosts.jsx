import React from 'react';
import style from './MyPosts.module.css';
import { Posts } from '../Posts/Posts';

export const MyPosts = (props) => {
      let postsElments = props.posts.map((p) => (
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
