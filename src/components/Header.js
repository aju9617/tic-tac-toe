import React from 'react';
import xs from './../assests/images/X-s.svg';
import os from './../assests/images/O-s.svg';
import { FaBalanceScale } from 'react-icons/fa';
export default function Header({ x, o, d }) {
  return (
    <div className="header">
      <div className="header__items">
        <img src={xs} alt="xoxo-x small" />
        <h4>{`${x} wins`}</h4>
      </div>
      <div className="header__items">
        <img src={os} alt="xoxo-o small" />

        <h4>{`${o} wins`}</h4>
      </div>
      <div className="header__items">
        <FaBalanceScale />
        <h4>{`${d} Draws`}</h4>
      </div>
    </div>
  );
}
