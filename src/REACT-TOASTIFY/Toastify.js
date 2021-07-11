import React from 'react';
import './toastify.scss';
import { CustomToast } from './CustomToast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

export const Toastify = () => {
    const notify = () => {
        toast('Basic notification!', {position: toast.POSITION.TOP_CENTER, autoClose: false});
        toast.success('Sucsses notification!', {position: toast.POSITION.TOP_RIGHT, autoClose: 8000});
        toast.info('Info notification!', {position: toast.POSITION.BOTTOM_LEFT});
        toast.warn(<CustomToast />, {position: toast.POSITION.BOTTOM_CENTER});
        toast.error('Error notification!', {position: toast.POSITION.BOTTOM_RIGHT});
    }

    return (
        <div className='toastify'>
            <button onClick={notify}>Notify!</button>
        </div>
    )
}






// https://fkhadra.github.io/react-toastify/introduction   REACT-TOASTIFY DOCUMENTATION
