import React, {useRef} from 'react'

export function Ref() {

    const titleRef = useRef();  
    const dummyRef = useRef();

    return (
        <div>
            <h1 ref={titleRef}>YoYo</h1>
            <h2 ref={dummyRef}>Some dummy text.</h2>

            <button onClick={(e)=> {
                titleRef.current.textContent = 'kurčina';
                dummyRef.current.textContent = 'this is a new text, we using a useRef';

                titleRef.current.style.color = 'tomato';
                dummyRef.current.style.color = 'green'
            }}>SUBMIT</button>
        </div>
    )
}


//With use ref we can catch elements directly from DOM.
