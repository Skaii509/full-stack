import React, { useState, useEffect } from 'react';

import '../styles/pagesStyles/HomePage.css'

//"https://finance.yahoo.com/rss/industry?s=yhoo"
//"https://www.bbvaapimarket.com/es/mundo-api/algunas-api-financieras-para-crear-aplicaciones-dinamicas/"
//"https://eodhd.com/api/eod/MCD.US?=demo&period=d&api_token=demo&fmt=json"

function HomePage() {
    return (
        <>
            <aside>Noticias</aside>
            <div className='levelOneContainer'>
                <header>
                    <h1><strong>Nivel 1: Higiene financiera</strong></h1>
                    <div className='iconsContainer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </header>
                
                <div className='levelOneContent'>
                    Contenido
                </div>
            </div>
        </>
    )
}

export default HomePage