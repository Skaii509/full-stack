import React from 'react';

import { Link } from 'react-router-dom'
import ExpensesList from './ExpensesList'
import '../styles/componentsStyles/IncomeTable.css'

function ExpenseTable() {
    return (
        <>
            <div className='addIncomeBtnContainer'>
                <Link className='addIncomeBtn' to={'add-expense'}>Agregar gasto</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="columnOne">Nombre de gasto</th>
                        <th className="columnTwo">Monto</th>
                        <th className="columnThree">Acción</th>
                    </tr>
                </thead>
                <ExpensesList />
            </table>
        </>
    )
}

export default ExpenseTable