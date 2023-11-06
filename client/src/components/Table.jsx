import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import { useIncomes } from '../context/IncomeContext';
import { useExpenses } from '../context/IncomeContext';

import '../styles/componentsStyles/IncomeTable.css'

function Table({ tablename, data, isIncome, totalAmount}) {
    const { deleteIncome } = useIncomes()
    const { deleteExpense } = useExpenses()

    return ( 
        <>
            <div className='addIncomeBtnContainer'>
                {isIncome ? (
                    <Link className='addIncomeBtn' to={'add-income'}>Agregar {tablename}</Link>
                ):
                    <Link className='addIncomeBtn' to={'add-expense'}>Agregar {tablename}</Link>
                }
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="columnOne">Nombre de {tablename}</th>
                        <th className="columnTwo">Monto</th>
                        <th className="columnThree">Acción</th>
                    </tr>
                </thead>
                <tbody className="tableTbody">
                {
                    data.map((row, idx) => {
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
                                        {isIncome ? (
                                            <>
                                                <Link to={`incomes/${row._id}`}>
                                                    <BsFillPencilFill className="editIncomeButton" />
                                                </Link>
                                                <BsFillTrashFill
                                                    className="deleteIncomeButton"
                                                    onClick={() => deleteIncome(row._id)}
                                                />
                                            </>
                                        ) : 
                                            <>
                                                <Link to={`expenses/${row._id}`}>
                                                    <BsFillPencilFill className="editIncomeButton" />
                                                </Link>
                                                <BsFillTrashFill
                                                    className="deleteIncomeButton"
                                                    onClick={() => deleteExpense(row._id)}
                                                />
                                            </>
                                        }
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
                                <h1 id='totalAmount'>{parseFloat(totalAmount).toLocaleString('es-ES')}</h1>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
     );
}

export default Table;