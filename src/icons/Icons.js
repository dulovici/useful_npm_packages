
import React from 'react';
import './icons.scss';
// import { IconContext } from 'react-icons';    //CONTEXT PROVIDER
import { FaJenkins} from "react-icons/fa";
import { DiGo } from "react-icons/di";



export const Icons = () => {
    return (
        // <IconContext.Provider value={{color: 'blue' , size: '8rem'}} >    IF YOU WANT ALL ICONS TO BE SAME SIZE AN COLOR
        <div className='icons'>
            <FaJenkins color='purple' size='10rem' />
            <DiGo color='tomato' size='12rem' />
        </div>
        // </IconContext.Provider>
        
    )
}







// https://react-icons.github.io/react-icons/     REACT-ICONS DOCUMENTATION