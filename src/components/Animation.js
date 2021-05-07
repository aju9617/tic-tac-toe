import React, { useRef, useEffect, useMemo } from 'react';
import Lottie from 'react-lottie';
import animation from './../assests/lottie/confeti.json';

export default function Animation(props) {
  const lottie = useRef(null);
  const defaultOptions = useMemo(() => {
    return {
      loop: false,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }, []);
  useEffect(() => {
    if (lottie) defaultOptions.play = true;
  }, [defaultOptions]);
  return (
    <div className="lottie">
      <Lottie options={defaultOptions} ref={lottie} />
    </div>
  );
}
