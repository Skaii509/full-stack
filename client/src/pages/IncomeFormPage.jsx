import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useIncomes } from '../context/IncomeContext';
import { Link, useNavigate, useParams } from 'react-router-dom'

import '../styles/componentsStyles/IncomeFormPage.css'

function IncomeFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { getIncome, createIncome, editIncome } = useIncomes();
    const navegate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadIncomes () {
            if(params.id){
                const income = await getIncome(params.id);
                setValue('title', income.title)
                setValue('amount', income.amount)
            }
        }
        loadIncomes()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if(params.id){
            editIncome(params.id, data)
        } else {
            createIncome(data);
        }

        navegate('/calculator');
    })

    return (
        <>
            <div className='modalContainer'>
                <div className='modal'>
                    <form onSubmit={onSubmit}>
                        <div className='formGroup'>
                            <label htmlFor="income">Ingresos</label>
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

export default IncomeFormPage