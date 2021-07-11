import React from 'react';
import './countup.scss';
import CountUp, {useCountUp} from 'react-countup';

export const ReactCountup = () => {

    const {countUp,start,pauseResume,reset,update} = useCountUp({duration: 5, end: 10000,startOnMount: false})

    return (
        <div className='countup'>
            <div>
                <h1>{countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={pauseResume}>Pause/Resume</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => update(2000)}>Update</button>
            </div>

            <CountUp end={1240} />
            <br/>
            <CountUp end={1240} duration={5}/>
            <br/>
            <CountUp start={620} end={1240} duration={5}/>
            <br/>
            <CountUp end={1000} duration={5} prefix='$' decimals={2}/>
            <br/>
            <CountUp end={1000} duration={5} suffix='USD' decimals={2}/>
        </div>
    )
}



//  https://www.npmjs.com/package/react-countup  REACT-COUNTUP DOCUMENTATION;
