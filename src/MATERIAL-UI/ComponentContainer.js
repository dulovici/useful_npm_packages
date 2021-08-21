
import React from 'react';
import { Checkboard } from 'react-color';
import './componentContainer.scss';
import { Buttons } from './Components/Buttons';
import { CheckBox } from './Components/CheckBox';


export const ComponentContainer = () => {
    return (
        <div>
            <Buttons />
            <CheckBox />
        </div>
    )
}
