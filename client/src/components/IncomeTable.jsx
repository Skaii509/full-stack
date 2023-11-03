import React, { useState, useEffect } from 'react';

import IncomesList from './IncomesList'
import Modal from './Modal';

import '../styles/componentsStyles/IncomeTable.css'

function IncomeTable() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <button className='addIncomeBtn' onClick={() => {setModalOpen(true)}}>Add new income</button>
            <table className="table">
                <thead>
                    <tr>
                        <th className="columnOne">Nombre de ingreso</th>
                        <th className="columnTwo">Monto</th>
                        <th className="columnThree">Acción</th>
                    </tr>
                </thead>
                <IncomesList />
            </table>
            {modalOpen && <Modal closeModal={() => {
                setModalOpen(false)
            }} />}
        </>
    )
}

export default IncomeTable