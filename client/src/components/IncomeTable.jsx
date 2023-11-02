import { React } from "react"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"

import { useIncomes } from '../context/IncomeContext';

import '../styles/componentsStyles/IncomeTable.css'

function IncomeTable({ rows }) {
    const initialValue = 0;
    const totalAmount = rows.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.amount), initialValue);
    const { deleteIncome, editIncome } = useIncomes()

    return (
        <div className="tableWrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th className="incomeNameCol">Nombre de ingreso</th>
                        <th className="incomeAmountCol">Monto</th>
                        <th className="incomeActionsCol">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((rows, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="incomeTitle">{rows.title}</td>
                                    <td>${rows.amount}</td>
                                    <td>
                                        <span className="actionIcons">
                                            <BsFillPencilFill className="editBtn" onClick={() => editIncome(rows._id, rows)} />
                                            <BsFillTrashFill className="deleteBtn" onClick={() => deleteIncome(rows._id)}/>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot className="totalAmount">
                    <tr>
                        <td>Total =</td>
                        <td>${totalAmount}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default IncomeTable