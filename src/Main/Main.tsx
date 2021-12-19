import React from 'react';
import s from '././Main.module.css'
import sContainer from '../common/styles/Container.module.css'


function Main() {
    return <div className={s.mainBlock}>
        <div className={sContainer.container}>
            <div className={s.text}>
                <span> HI THERE</span>
                <h1>I'M A JEFFRY AIRON</h1>
                <p>A FRONT-END DEVELOPER</p>
            </div>
            <div className={s.photo}></div>
        </div>
    </div>
}

export default Main;
