import React from 'react';

import '../styles/components/Modal.css'

function Modal({ closeModal }) {
    return ( 
        <div className='modalContainer' onClick={(e) => {
                if(e.target.className === "modalContainer") closeModal();
            }}>
            <div className='modal'>
                <form action="">
                    <div className='formGroup'>
                        <label htmlFor="income">Ingresos</label>
                        <input name="income" />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="amount">Monto</label>
                        <input name="amount" />
                    </div>
                    <button type='submit' className='modalSendButton bg-blue-500'>Enviar</button>
                </form>
            </div>
        </div>
     );
}

export default Modal;