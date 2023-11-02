import VanillaTilt from "vanilla-tilt";
import {useEffect, useRef} from 'react';

const TiltTest = () => { 
  const tilt = useRef<HTMLDivElement>(null);
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };
  useEffect(() => {
    const tiltNode = tilt.current as HTMLDivElement;
    VanillaTilt.init(tiltNode, options);
  }, []);
  return <div ref={tilt} className="w-96 h-96 bg-amber-500 text-2xl mt-8">Testing vanilla tilt</div>
}

export default TiltTest;