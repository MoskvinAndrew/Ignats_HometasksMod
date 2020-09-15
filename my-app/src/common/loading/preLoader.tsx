import React from 'react';
import L from './L.module.css';

let Preloader = React.memo(() => {

    return <div className={L.loader}><h3>Десятая домашка:</h3></div>
})
export default Preloader;