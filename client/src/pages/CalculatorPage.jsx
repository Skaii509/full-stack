import React from 'react';

import IncomeTable from '../components/incomeTable'
import '../styles/pagesStyles/Calculator.css'

function CalculatorPage() {
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
                    <h1 className='headerText'><strong>Ingresos:</strong> ¿Cuanto dinero percibe mensualmente?</h1>
                </div>
                <IncomeTable />
            </div>
        </>
    )
}

export default CalculatorPage