import React, { useEffect } from 'react';

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import { useIncomes } from '../context/IncomeContext';

function IncomesList() {
    const { incomes, getIncomes, deleteIncome } = useIncomes()    
    const totalAmount = incomes.reduce((acc, income) => acc + parseInt(income.amount, 10), 0);
    
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
                            <td>{row.title}</td>
                            <td className="amountCell">
                                <div className="footerDiv">
                                    <p>$</p>
                                    <p>{row.amount}</p>
                                </div>
                            </td>
                            <td className='actionsCell'>
                                <span className="actionIcons">
                                    <BsFillPencilFill className="editIncomeButton" onClick={() => console.log("Edit: ", row._id)} />
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
                            <h1>{totalAmount}</h1>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tfoot>
        </>
     );
}

export default IncomesList;