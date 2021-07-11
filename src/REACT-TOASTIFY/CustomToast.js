import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CustomToast = ({closeToast}) => {
    return (
        <div>
            Separate component .
            <button onClick={closeToast}>Close</button>
        </div>
    )
}
