import React from 'react';
import style from './ProfileInfo.module.css';

export const ProfileInfo = () => {
      return (
            <div className={style.profileInfo}>
                  <div>
                        <img src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS4SovDlIIL8_Q1DG3_LgampHY1s9eLv5gfNA_UtClauQ_a3GWAUy5wLPTGYR_zCD9ojuE3zfD73JCv9GO2Imk' />
                  </div>
                  <div className={style.descriptionBlock}>
                        avatar + description
                  </div>
            </div>
      );
};
