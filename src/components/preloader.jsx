import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';
import './preloader.css';
const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className='preloader sm:flex items-center justify-center'>
      <div className="texts-container sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <span className="block mb-2 sm:mb-2 text-lg md:text-l lg:text-2xl xl:text-3xl">Reliable</span>
        <span className="block mb-2 sm:mb-2 text-lg md:text-l lg:text-2xl xl:text-3xl">Operations</span>
        <span className="block mb-2 sm:mb-2 text-lg md:text-l lg:text-2xl xl:text-3xl">&</span>
        <span className="block mb-2 sm:mb-2 text-lg md:text-l lg:text-2xl xl:text-3xl">Optimization</span>
        <span className="block mb-2 sm:mb-2 text-lg md:text-l lg:text-2xl xl:text-3xl">Tech</span>
        <span className="block mb-2 sm:mb-2 text-lg md:text-l lg:text-2xl xl:text-3xl">Solutions</span>
      </div>
    </div>
  );
};

export default Preloader;
