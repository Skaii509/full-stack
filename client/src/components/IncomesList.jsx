import React, { useEffect } from 'react';

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import { useIncomes } from '../context/IncomeContext';
import { Link } from 'react-router-dom';

function IncomesList() {
    const { incomes, getIncomes, deleteIncome } = useIncomes()
    const totalAmount = incomes.reduce((acc, income) => acc + income.amount, 10, 0);
    
    useEffect(() => {
        getIncomes()
    }, []);

    return ( 
        <>
            <tbody className="tableTbody">
            {
                incomes.map((row, idx) => {
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
                                    <Link to={`${row._id}`}>
                                        <BsFillPencilFill className="editIncomeButton" />
                                    </Link>
                                    <BsFillTrashFill className="deleteIncomeButton" onClick={() => deleteIncome(row._id)} />
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
                            <h1>{parseFloat(totalAmount).toLocaleString('es-ES')}</h1>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tfoot>
        </>
     );
}

export default IncomesList;