import React, {useState} from 'react';
import './colorPicker.sass';
import { ChromePicker } from 'react-color';

export const ColorPicker = () => {
    const [color, setColor] = useState('#fff');
    const [showColorPicker, setShowColorPicker] = useState(false);
    return (
        <div>
            <button onClick={() => setShowColorPicker(!showColorPicker)}>{showColorPicker? 'Close Color picker' : 'Pick A Color'}</button>
            {showColorPicker ? <ChromePicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} /> : null}
            <h1>You Picked {color}</h1>
        
        </div>
    )
}



// https://casesandberg.github.io/react-color/  COLOR-PICKER DOCUMENTATION;
