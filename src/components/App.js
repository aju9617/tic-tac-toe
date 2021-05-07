import React, { useEffect, useState, useMemo } from 'react';
import Animation from './Animation';
import Header from './Header';
import Board from './Board';
import xs from './../assests/images/X-s.svg';
import os from './../assests/images/O-s.svg';
import ClickSound from './../assests/sounds/tap.mp3';
import Footer from './Footer';

export default function App() {
  const [game, setGame] = useState(new Array(9).fill(-1));
  const [vol, setVol] = useState(true);
  const [xwins, setxwins] = useState(0);
  const [owins, setowins] = useState(0);
  const [draw, setDraw] = useState(0);
  const [gameState, setGameState] = useState(false);
  const [player, setPlayer] = useState(0);
  const [soundState, setSoundState] = useState(false);
  const tapSound = useMemo(() => new Audio(ClickSound), []);

  const handleClickSound = () => {
    setSoundState(!soundState);
    if (soundState) tapSound.pause();
    else tapSound.play();
  };

  const checkWinner = (game) => {
    for (let i = 0; i < 3; i++) {
      if (
        game[i * 3] === game[i * 3 + 1] &&
        game[i * 3 + 1] === game[i * 3 + 2]
      ) {
        if (game[i * 3] !== -1) {
          game[i * 3] === 1 ? setxwins(xwins + 1) : setowins(owins + 1);
          setGameState(true);
          return;
        }
      }
      if (game[i] === game[i + 3] && game[i + 3] === game[i + 6]) {
        if (game[i] !== -1) {
          game[i] === 1 ? setxwins(xwins + 1) : setowins(owins + 1);
          setGameState(true);
          return;
        }
      }
    }
    if (
      (game[0] === game[4] && game[4] === game[8]) ||
      (game[2] === game[4] && game[4] === game[6])
    ) {
      if (game[4] !== -1) {
        game[4] === 1 ? setxwins(xwins + 1) : setowins(owins + 1);
        setGameState(true);
        return;
      }
    }

    for (let i = 0; i < 9; i++) {
      if (game[i] === -1) {
        return;
      }
    }
    setDraw(draw + 1);
  };

  const handleBoardClick = (board, player) => {
    handleClickSound();
    const arr = [...game];
    if (arr[board - 1] !== -1) {
      return;
    }
    if (player === 1) arr[board - 1] = 1;
    else arr[board - 1] = 0;
    setPlayer(player === 1 ? 0 : 1);
    setGame(arr);
    checkWinner(arr);
  };

  const resetGame = () => {
    setGame(new Array(9).fill(-1));
    setGameState(false);
  };
  useEffect(() => {
    tapSound.playbackRate = 1.3;
    tapSound.muted = !vol;
    tapSound.addEventListener('ended', () => {
      setSoundState(false);
    });
  }, [tapSound, vol]);
  return (
    <>
      <div className="App">
        <Header x={xwins} o={owins} d={draw} />
        <Board
          game={game}
          action={handleBoardClick}
          player={player}
          checkWinner={checkWinner}
        />
        <div className="player">
          <div className="player-item">
            <img src={xs} alt="xs" />
          </div>
          <div className="player-item">
            <img src={os} alt="xo" />
          </div>
          <div
            className="slider"
            style={player === 1 ? { left: 0 } : { right: 0 }}
          ></div>
        </div>
        {gameState ? <Animation /> : ''}
        <Footer
          sound={vol}
          setSound={() => {
            setVol(!vol);
          }}
          reset={resetGame}
        />
      </div>
    </>
  );
}
