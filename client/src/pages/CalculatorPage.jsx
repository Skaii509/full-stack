import React, { useState, useEffect } from 'react';

import Table from '../components/Table';
import { useIncomes } from '../context/IncomeContext';
import { useExpenses } from '../context/IncomeContext';
import '../styles/pagesStyles/Calculator.css'

function CalculatorPage() {
    const { incomes, getIncomes } = useIncomes()
    const { expenses, getExpenses } = useExpenses()
    const [ totalIncome, setTotalIncome ] = useState()
    const [ totalExpense, setTotalExpense ] = useState()
    const [ calculation, setCalculation ] = useState()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, []);
    
    useEffect(() => {
        let totalAmount = 0;
        for (const item of incomes) {
            totalAmount += item.amount;
        }
        setTotalIncome(totalAmount)
    }, [incomes]);
    
    useEffect(() => {
        let totalAmount = 0;
        for (const item of expenses) {
            totalAmount += item.amount;
        }
        setTotalExpense(totalAmount)
        
    }, [expenses]);
    
    useEffect(() => {
        const value = totalIncome-totalExpense
        setCalculation(value)
    }, [totalIncome, totalExpense]);
    
    const textStyle = {
        color: calculation < 0 ? 'red' : '#42a942'
    };

    return (
        <>
            <div className="calculatorInfo">
                <h1 className="infoTitle">Calculadora: Presupuesto mensual</h1>
                <p className="infoPar">
                    Para ordenar sus finanzas, lo primero es realizar un presupuesto mensual para saber con claridad cuáles sus ingresos y gastos reales. Esto es esencial para optimizar el uso de su dinero.
                    El organizar sus gastos le podría permitir ahorrar o incrementar su ahorro mensual para un plan futuro.
                </p>
            </div>

            <div className='dataCard'>
                <div className='headerWrapper'>
                    <h1 className='headerText'><strong>Ingresos:</strong> ¿Cuánto dinero percibe mensualmente?</h1>
                </div>
                <Table tablename="ingreso" data={incomes} isIncome totalAmount={totalIncome} />
            </div>
            
            <div className='dataCard'>
                <div className='headerWrapper'>
                    <h1 className='headerText'><strong>Gastos:</strong> ¿Cuánto dinero gasta mensualmente?</h1>
                </div>
                <Table tablename="gasto" data={expenses} isIncome={false} totalAmount={totalExpense}/>
            </div>
            
            <div className='dataCard'>
                <div className='headerWrapper'>
                    <h1 style={textStyle} className='headerText'><strong>Total </strong>${parseFloat(calculation).toLocaleString('es-ES')}</h1>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default CalculatorPage