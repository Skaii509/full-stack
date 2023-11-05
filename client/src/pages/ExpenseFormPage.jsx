import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useExpenses } from '../context/IncomeContext';
import { Link, useNavigate, useParams } from 'react-router-dom'

import '../styles/componentsStyles/IncomeFormPage.css'

function ExpenseFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { getExpense, createExpense, editExpense } = useExpenses();
    const navegate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadExpenses () {
            if(params.id){
                const expense = await getExpense(params.id);
                setValue('title', expense.title)
                setValue('amount', expense.amount)
            }
        }
        loadExpenses()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if(params.id){
            editExpense(params.id, data)
        } else {
            createExpense(data);
        }

        navegate('/calculator');
    })

    return (
        <>
            <div className='modalContainer'>
                <div className='modal'>
                    <form onSubmit={onSubmit}>
                        <div className='formGroup'>
                            <label htmlFor="income">Gasto</label>
                            <input type="text" placeholder='Titulo de ingreso...' name="income" id='income' {...register('title', {required: true})} />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="amount">Monto</label>
                            <input 
                                type="number" 
                                placeholder='Monto...' 
                                name="amount" 
                                id='amount' 
                                {...register('amount', {
                                    required: true, 
                                    valueAsNumber: true
                                })}
                            />
                        </div>
                        <div className='incomeFormBtnContainer'>
                            <Link className='modalCancelButton' to={'/calculator'}>Cancelar</Link>
                            <button type='submit' className='modalSendButton bg-blue-500' >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ExpenseFormPage