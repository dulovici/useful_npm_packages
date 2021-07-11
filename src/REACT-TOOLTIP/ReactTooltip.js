import React from 'react';
import './reactTooltip.scss';
import { SecondComponent } from './SecondComponent';
import { CustomChild } from './CustomChild';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const ReactTooltip = () => {
    return (
        <div className='tooltip'>
            <div className='example'>
                 <Tippy arrow={false} delay={1000} content='Basic Tooltip'>       
                    <button>Hover</button>
                </Tippy>
            </div>

            <div className='example'>
                 <Tippy content={<span style={{color: 'orange'}}>Colored</span>}>
                    <button>Hover</button> 
                </Tippy>
            </div>

            <div className='example'>
                 <Tippy content={<SecondComponent />}>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div className='example'>
                 <Tippy placement='bottom' content={<span style={{color: 'orange'}}>Colored</span>}>
                    <CustomChild />
                </Tippy>
            </div>
        </div>
    )
}



// https://atomiks.github.io/tippyjs/v6/getting-started/  REACT-TOOLTIPS DOCUMENTATION
