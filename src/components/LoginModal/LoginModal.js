import React from 'react';
import './styles.css';
import ReactDom from 'react-dom'

const LoginModal = ( {open, onClose} ) => {

    if (!open) return null;

    return ReactDom.createPortal(
    <>
        <div className='modal-overlay'>
            <div className='modal'>
                <h1>Sign In modal</h1>
            </div>
        </div>
    </>,
    document.getElementById('modal-overlay')
    )
};

export default LoginModal;