import React from 'react';

import { Link } from 'react-router-dom'
import IncomesList from './IncomesList'
import '../styles/componentsStyles/IncomeTable.css'

function IncomeTable() {
    return (
        <>
            <div className='addIncomeBtnContainer'>
                <Link className='addIncomeBtn' to={'add-income'}>Agregar ingreso</Link>
            </div>
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
        </>
    )
}

export default IncomeTable