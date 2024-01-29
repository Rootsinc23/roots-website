import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css'

const Preloader = () => {

  useEffect(()=> {
    preLoaderAnim()
  }, []);

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>create,</span>
            <span>Optimize,</span>
            <span>We are ROOTS</span>
        </div>
    </div>
  );
}

export default Preloader;