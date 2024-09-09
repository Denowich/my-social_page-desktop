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
      let dialogsData = [
            { id: 1, name: 'Den' },
            { id: 2, name: 'Rex' },
            { id: 3, name: 'Danya' },
            { id: 4, name: 'Vika' },
            { id: 5, name: 'Sanya' },
      ];

      let messagesData = [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yooo!!' },
      ];
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogItems}>
                        <DialogsItem
                              id={dialogsData[0].id}
                              name={dialogsData[0].name}
                        />
                        <DialogsItem
                              id={dialogsData[1].id}
                              name={dialogsData[1].name}
                        />
                  </div>

                  <div className={style.messageItems}>
                        <MessageItem
                              id={messagesData[0].id}
                              message={messagesData[0].message}
                        />
                        <MessageItem
                              id={messagesData[1].id}
                              message={messagesData[1].message}
                        />
                  </div>
            </div>
      );
};
