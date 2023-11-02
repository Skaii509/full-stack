import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IncomeProvider, useIncomes } from '../context/IncomeContext';

import '../styles/componentsStyles/Modal.css'

function Modal({ closeModal }) {
    const { register, handleSubmit } = useForm();
    const { createIncome } = useIncomes()
    const { formState, setFormState } = useState()

    const onSubmit = handleSubmit((data) => {
        createIncome(data)
        closeModal()
    });

    return (
        <IncomeProvider>
            <div className='modalContainer' onClick={(e) => {
                    if(e.target.className === "modalContainer") closeModal();
                }}>
                <div className='modal'>
                    <form onSubmit={onSubmit}>
                        <div className='formGroup'>
                            <label htmlFor="income">Ingresos</label>
                            <input type="text" placeholder='Titulo de ingreso...' name="income" {...register('title')} />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="amount">Monto</label>
                            <input type="text" placeholder='Monto...' name="amount" {...register('amount')}/>
                        </div>
                        <button type='submit' className='modalSendButton bg-blue-500'>Enviar</button>
                    </form>
                </div>
            </div>
        </IncomeProvider>
     );
}

export default Modal;