import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

export const DialogsItem = (props) => {
      let path = '/dialogs/' + props.id;
      return (
            <div className={`${style.dialog} ${style.active}`}>
                  <NavLink to={path}>{props.name}</NavLink>
            </div>
      );
};

export const MessageItem = (props) => {
      return <div className={style.dialog}>{props.message}</div>;
};

export const Dialogs = (props) => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogItems}>
                        <DialogsItem id='1' name='Den' />
                        <DialogsItem id='2' name='Rex' />
                        <DialogsItem id='3' name='Danya' />
                        <DialogsItem id='4' name='Vika' />
                        <DialogsItem id='5' name='Sanya' />
                  </div>
                  <div className={style.messageItems}>
                        <MessageItem id='1' message='Hi!' />
                        <MessageItem id='1' message='How are you?' />
                        <MessageItem id='1' message='Yooo!!' />
                  </div>
            </div>
      );
};
