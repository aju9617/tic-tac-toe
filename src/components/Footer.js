import React from 'react';
import { IoReloadCircle } from 'react-icons/io5';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

export default function Footer({ reset, sound, setSound }) {
  return (
    <div className="footer">
      <div onClick={reset} className="footer__item">
        <div className="setting__icon">
          <IoReloadCircle />
        </div>
        <p>Reset</p>
      </div>
      {sound ? (
        <div onClick={setSound} className="footer__item">
          <div className="setting__icon">
            <HiVolumeUp />
          </div>
          <p>Mute</p>
        </div>
      ) : (
        <div onClick={setSound} className="footer__item">
          <div className="setting__icon">
            <HiVolumeOff />
          </div>
          <p>Unmute</p>
        </div>
      )}
    </div>
  );
}
