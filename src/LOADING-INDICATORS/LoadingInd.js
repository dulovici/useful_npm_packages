import React from 'react';
import './loadingInd.scss';
import {css} from '@emotion/react';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';

const loaderCSS = css`
margin-top: 25px;
margin-bottom: 25px;
`


export const LoadingInd = () => {
    return (
        <div className='spinner'>
            <h1>Loading</h1>
            <BounceLoader css={loaderCSS} color='tomato' size={24} loading/>
            <BarLoader css={loaderCSS} color='green' loading/>
            <BeatLoader css={loaderCSS} color='gray' loading/>
        </div>
    )
}


// https://www.davidhu.io/react-spinners/ SPINNERS - DOCUMENTATION 
// https://www.npmjs.com/package/@emotion/react  EMOTIONS - DOSUMENTATION