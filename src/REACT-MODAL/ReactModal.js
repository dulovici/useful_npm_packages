import React, { useState } from 'react';
import './reactModal.scss';
import Modal from 'react-modal';


Modal.setAppElement('#root'); //prevents element is not defined error.

export const ReactModal = () => {
    const [modal, setModal] = useState(false);
    
    return (
        <div className='react-modal'>
            <button onClick={() => setModal(!modal)}>PopUp</button>
            <Modal 
            isOpen={modal}                              // when isOpen={true} modal is visible.
            onRequestClose={() => setModal(false)}  // alows you to close modal when you click outside and press esc.
            shouldCloseOnOverlayClick={false}  //you can close modal only by pressing esc.
            style ={                        // set modal css in this atribude
                {
                    overlay: {
                        backgroundColor: 'grey',
                    },
                    content: {
                        color: 'orange',
                        height: '500px',
                        width: '700px',
                        textAlign: 'center',
                        margin: 'auto'
                    }
                }
            }
            >
                <h2>Modal title.</h2>
                <p>Modal body.</p>
                <button onClick={() => setModal(!modal)}>Close</button>
            </Modal>
        </div>
    )
}


// http://reactcommunity.org/react-modal/   REACT-MODAL DOCUMENTATION



