import React, {forwardRef} from 'react';



export const CustomChild = forwardRef((props,ref) => {
    return (
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})


// If we want to use a tooltip on a diferent component we need to use forwardRef method.