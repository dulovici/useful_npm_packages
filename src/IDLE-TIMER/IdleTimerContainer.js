import React, {useRef, useState} from 'react';
import './idleTimer.scss';
import IdleTimer from 'react-idle-timer';

export const IdleTimerContainer = () => {
    const [loged, setLoged] = useState(false)
    const idleTimerRef = useRef(null);
    
    const idleLogOut = () => {
        setLoged(false)
    }
    
    return (
        <div>
            {/* <IdleTimer ref={idleTimerRef} timeout={2500} onIdle={() => alert('user is idle')}></IdleTimer> */}
            <h1>{loged ? 'You Are Loged.' : 'You need to log in.'}</h1>
            <button onClick={() => setLoged(!loged)}>{loged ? 'Log Out' : 'Log In'}</button>
            <IdleTimer ref={idleTimerRef} timeout={2500} onIdle={idleLogOut}></IdleTimer>
        </div>
    )
}


// https://www.npmjs.com/package/react-idle-timer  IDLE-TIMER DOCUMENTATION;