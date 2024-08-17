import React from 'react';
import style from './Dialogs.module.css';

export const Dialogs = (props) => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogItems}>
                        <div className={style.dialog}>Den</div>
                        <div className={style.dialog}>Rex</div>
                        <div className={`${style.dialog} ${style.active}`}>
                              Danya
                        </div>
                        <div className={style.dialog}>Vika</div>
                        <div className={style.dialog}>Sanya</div>
                  </div>
                  <div className={style.messageItems}>
                        <div className={style.dialog}>Hi!</div>
                        <div className={style.dialog}>How are you?</div>
                        <div className={style.dialog}>Yooo!!!</div>
                  </div>
            </div>
      );
};
