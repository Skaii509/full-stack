import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import '../styles/pagesStyles/InteresPage.css'

function InteresPage() {
    const { register, handleSubmit } = useForm()
    const [ totalInteresCompuesto, setTotalInteresCompuesto ] = useState()
    
    const onSubmit = handleSubmit((data) => {
        const response = getInteresComp(data)
        setTotalInteresCompuesto(response)
    })

    const getInteresComp = (datos) => {
        const { tasaInteres, capitalInicial, adicionAnual, años, interesCompuestoXAño } = datos;
      
        const tasaDecimal = tasaInteres / 100;
      
        let montoFinal = capitalInicial * Math.pow((1 + (tasaDecimal/interesCompuestoXAño)), (años*interesCompuestoXAño));
      
        for (let i = 0; i < años; i++) {
          montoFinal += adicionAnual * Math.pow((1 + (tasaDecimal/interesCompuestoXAño)), interesCompuestoXAño*(años-i));
        }
      
        montoFinal = Math.round(montoFinal * 100) / 100;
      
        return montoFinal;
      }

    return (
        <>
            <form className='interesContainer' onSubmit={onSubmit}>
                <div className="interesTable">
                    <div className='interesRow'>
                        <label htmlFor="capitalInicial">Capital inicial</label>
                        <div>
                            <label htmlFor="capitalInicial">$</label>
                            <input 
                                type="number" 
                                placeholder='0...' 
                                min={0} 
                                id='capitalInicial' 
                                {...register('capitalInicial', {required: true})}
                            />
                        </div>
                    </div>
                    <div className='interesRow'>
                        <label htmlFor="adicionAnual">Adición anual</label>
                        <div>
                            <label htmlFor="adicionAnual">$</label>
                            <input type="number" placeholder='0...' id='adicionAnual' {...register('adicionAnual', {required: true})} />
                        </div>
                    </div>
                    <div className='interesRow'>
                        <label htmlFor="años">Años</label>
                        <input type="number" placeholder='0...' id='años' {...register('años', {required: true})} />
                    </div>
                    <div className='interesRow'>
                        <label htmlFor="tasaInteres">Tasa de interes (%)</label>
                        <div>
                            <input type="number" placeholder='%...' id='tasaInteres' {...register('tasaInteres', {required: true})} />
                            <label htmlFor="tasaInteres">%</label>
                        </div>
                    </div>
                    <div className='interesRow'>
                        <label htmlFor="interesCompuestoXAño">Interes compuesto</label>
                        <input type="number" placeholder='1...' id='interesCompuestoXAño' {...register('interesCompuestoXAño', {required: true})} />
                        <h1>veces por año</h1>
                    </div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
            
            {
                totalInteresCompuesto && (
                    <>
                        <div className='totalInteres'>
                            <p>Al finalizar el periodo, obtendrás:</p>
                            <p className='totalNumber'>$ {parseFloat(totalInteresCompuesto).toLocaleString('es-ES')}</p>
                        </div>
                    </>
            )
            }
        </>

     );
}

export default InteresPage;