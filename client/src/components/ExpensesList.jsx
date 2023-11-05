import React, { useState, useEffect } from 'react';

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import { useExpenses } from '../context/IncomeContext';
import { Link } from 'react-router-dom';

function ExpensesList() {
    const { expenses, getExpenses, deleteExpense } = useExpenses()
    const [ totalExpensesAmount, setTotalExpensesAmount ] = useState(0)

    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    
    useEffect(() => {
        getExpenses()
        setTotalExpensesAmount(total)
    }, [total]);

    return ( 
        <>
            <tbody className="tableTbody">
            {
                expenses.map((row, idx) => {
                    return (
                        <tr key={idx}>
                            <td className='titleCell'>{row.title}</td>
                            <td className="amountCell">
                                <div className="footerDiv">
                                    <p>$</p>
                                    <p>{parseFloat(row.amount).toLocaleString('es-ES')}</p>
                                </div>
                            </td>
                            <td className='actionsCell'>
                                <span className="actionIcons">
                                    <Link to={`expenses/${row._id}`}>
                                        <BsFillPencilFill className="editIncomeButton" />
                                    </Link>
                                    <BsFillTrashFill className="deleteIncomeButton" onClick={() => deleteExpense(row._id)} />
                                </span>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
            <tfoot className="tableTfoot">
                <tr>
                    <td>Total =</td>
                    <td className="actionsCell">
                        <div className="footerDiv">
                            <h1>$</h1>
                            <h1>{parseFloat(totalExpensesAmount).toLocaleString('es-ES')}</h1>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tfoot>
        </>
     );
}

export default ExpensesList;