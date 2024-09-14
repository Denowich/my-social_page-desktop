import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
      let dialogs = [
            { id: 1, name: 'Den' },
            { id: 2, name: 'Rex' },
            { id: 3, name: 'Danya' },
            { id: 4, name: 'Vika' },
            { id: 5, name: 'Sanya' },
      ];

      let dialogsElements = dialogs.map((d) => (
            <DialogItem id={d.id} name={d.name} />
      ));

      let messages = [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yooo!!' },
            { id: 4, message: 'Bla Bla!' },
            { id: 5, message: 'Ohoo hooo!' },
      ];

      let messagesElments = messages.map((m) => (
            <Message id={m.id} message={m.message} />
      ));

      return (
            <div className={style.dialogs}>
                  <div className={style.dialogItems}>{dialogsElements}</div>

                  <div className={style.messageItems}>{messagesElments}</div>
            </div>
      );
};
