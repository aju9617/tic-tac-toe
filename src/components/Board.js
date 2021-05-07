import React from 'react';
import x from './../assests/images/X.svg';
import o from './../assests/images/O.svg';

export default function Board({ game, player, action }) {
  const selectionHandler = (e) => {
    if (e.target.dataset.box) {
      action(e.target.dataset.box, player);
    }
  };
  const renderBoard = () => {
    return game.map((e, i) => {
      if (e === -1) {
        return (
          <div
            onClick={selectionHandler}
            data-box={i + 1}
            key={Math.random() * 100}
            className="board__piece"
          ></div>
        );
      } else if (e === 1) {
        return (
          <div
            onClick={selectionHandler}
            data-box={i + 1}
            key={Math.random() * 100}
            className="board__piece"
          >
            <img src={x} alt="xoxo x " />
          </div>
        );
      } else
        return (
          <div
            onClick={selectionHandler}
            data-box={i + 1}
            key={Math.random() * 100}
            className="board__piece"
          >
            <img src={o} alt="xoxo o " />
          </div>
        );
    });
  };
  return <div className="board">{renderBoard()}</div>;
}
