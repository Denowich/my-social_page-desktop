import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
      let dialogsElements = props.dialogs.map((d) => (
            <DialogItem id={d.id} name={d.name} />
      ));

      let messagesElments = props.messages.map((m) => (
            <Message id={m.id} message={m.message} />
      ));

      return (
            <div className={style.dialogs}>
                  <div className={style.dialogItems}>{dialogsElements}</div>

                  <div className={style.messageItems}>{messagesElments}</div>
            </div>
      );
};
