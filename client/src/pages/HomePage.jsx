import React, { useState, useEffect } from 'react';
import Parraph from '../components/Parraph.jsx';

import '../styles/pagesStyles/HomePage.css'

const url = 'https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=4';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45f86a0815msh3766964820ff5dfp12196bjsn2f24d86f9ed0',
		'X-RapidAPI-Host': 'cnbc.p.rapidapi.com'
	}
};

function HomePage() {
    const [loading, setLoading] = useState()
    const [news, setNews] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url, options);
          const result = await response.json();
          setLoading(result);
        };
        fetchData();
      }, []);
    
    useEffect(() => {
      if (loading) {
        try {
          const newArray = loading.data.mostPopularEntries.assets;
          setNews(newArray)
        } catch (error) {
          console.error("Error de map", error);
        }
      }
    }, [loading]);

    return (
        <div className='main'>
            <div className='container'>
                <div className='wrapInfo'>
                    <div className='introduction'>
                        <p className='infoFuente'>Fuente: https://www.santander.com/es/stories/propositos-para-mejorar-la-salud-financiera</p>
                        <p className='introTitle'> 
                            Ahorrar, controlar los gastos, pagar deudas, ganar más dinero… 
                            Existen diferentes propósitos financieros que puedes marcarte 
                            de cara al año nuevo. Todos ellos tienen un objetivo común: 
                            ayudarte a tener una mejor salud financiera.
                        </p>
                        <p className='infoFuente'>ÚLTIMA ACTUALIZACIÓN: 27/12/2022</p>
                        <p className='introP'>
                            Con el comienzo de año es posible que apuestes por hacer más ejercicio, 
                            comer más sano o aprender un idioma nuevo como propósitos. De la misma 
                            manera, un propósito que es recurrente es el de mejorar tu economía personal.  
                            Para alcanzarlo te puedes plantear diferentes objetivos con el fin de cuidar, 
                            mejor tus finanzas o ahorrar dinero para comprar un coche, viajar, la jubilación, etc.
                        </p>
                        <div className='infoPWithImg'>
                            <p className='introP'>
                                Tener propósitos financieros es un buen ejercicio para mantener el control de tu economía. 
                                Te ayudan a gestionar adecuadamente los recursos que tienes disponibles y a cumplir 
                                con tus objetivos de una forma organizada. Se adaptan a tus posibilidades y necesidades 
                                reales. También son útiles para que estés preparado en caso de tener que afrontar 
                                gastos imprevistos o contextos económicos desfavorables, o inciertos, que podrían 
                                afectar a tu estabilidad financiera.
                            </p>
                            <img src="https://www.santander.com/content/dam/santander-com/es/stories/contenido-stories/2021/inclusi%C3%B3n/im-storie-propositos-para-mejorar-la-salud-financiera-2.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="" />
                        </div>
                        <p className='introP'>
                            Aunque la llegada del año nuevo suele ser la elegida por las personas para 
                            fijar o renovar metas, la realidad es que cualquier momento es bueno para 
                            marcarte objetivos económicos. La economía personal es la clave para poder 
                            lograr tus objetivos y garantizar tu bienestar y el de los tuyos. A 
                            continuación, encontrarás cinco propósitos que son vitales para tener 
                            una mejor salud financiera.
                        </p>
                    </div>
                    <Parraph nParraph="1" titleParraph="Ahorrar es clave" isRendered>
                        El ahorro es el primer paso para tener una situación financiera saneada. Te permite afrontar 
                        imprevistos que puedan surgir (como puede ser la rotura de un electrodoméstico) de forma más 
                        holgada, así como adaptarte a la situación económica actual y futura. El ahorro puede verse 
                        comprometido por causas macroeconómicas como una alta inflación, donde la subida generalizada 
                        de precios conlleva una disminución del poder adquisitivo de las personas. Es en esos contextos, 
                        o en otros producidos por situaciones imprevistas, en los que es de gran ayuda contar con un 
                        respaldo económico gracias a una buena gestión del dinero.  
                        {<br />}
                        {<br />}
                        Pese a que ahorrar debería ser uno de los propósitos más importantes, también suele ser uno 
                        de los más difíciles de cumplir. Se debe, en parte, a los sesgos financieros: aquellas decisiones 
                        que toma tu cerebro automáticamente y que te empujan a gastar, buscando obtener la recompensa 
                        inmediata, antes de pensar en el futuro.
                        {<br />}
                        {<br />}
                        Existen pequeños cambios en los hábitos diarios que pueden contribuir al ahorro. Por ejemplo, 
                        definir cantidades específicas para el ocio con el fin de no gastar de más; realizar un 
                        presupuesto identificando entradas (ingresos) y salidas (gastos) de dinero; cancelar 
                        suscripciones a servicios innecesarios; elaborar una lista para ir al supermercado y no 
                        salirse de ella; o hacer un consumo responsable en tu hogar. En referencia a este último punto, 
                        rutinas como apagar las luces cuando no estés en una habitación, o haya suficiente claridad, 
                        adquirir electrodomésticos eficientes o reacondicionarlos, además de evitar dejar enchufados 
                        aparatos eléctricos si no los estás usando. Todos ellos son buenas prácticas para ayudar a tu 
                        bolsillo, a la economía personal y general (ante situaciones como una crisis energética) y 
                        al medioambiente. 
                    </Parraph>
                    <img 
                        src="https://www.santander.com/content/dam/santander-com/es/stories/contenido-stories/2021/inclusi%C3%B3n/im-storie-propositos-para-mejorar-la-salud-financiera-3.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" 
                        alt="Mujer revisando el telefono con bolsas de compras en los brazos" 
                        style={{padding: "0 5rem"}}
                    />
                    <Parraph nParraph="2" titleParraph="Disminuir o eliminar las deudas" isRendered>
                        Existen bienes a los que se suele acceder, de forma general, por medio de financiación como la 
                        firma de una hipoteca para comprar una vivienda o el de un préstamo para adquirir un coche. Sin 
                        embargo, hay otro tipo de situaciones en las que se recurre a la financiación para obtener 
                        productos o servicios que no son necesarios. En ocasiones, la financiación de la compra del modelo 
                        más reciente de smartphone o de unas vacaciones se convierte en una carga económica durante un 
                        determinado periodo de tiempo, en parte debido a no haber realizado un presupuesto. Sea cual 
                        sea el motivo, lo importante para gestionar adecuadamente las deudas es tener en cuenta la capacidad 
                        de pago y estar preparado ante una posible situación adversa, como la disminución de los ingresos, 
                        un gasto imprevisto o el aumento de los intereses asociados a estos productos.
                        {<br />}
                        {<br />}
                        Para cumplir con el propósito de reducir las deudas, el primer paso es no acumular más obligaciones 
                        financieras y evitar recurrir a préstamos o tarjetas de crédito mientras se retoma el control de 
                        las finanzas. El siguiente paso es planificar el pago de las deudas dependiendo de la capacidad de 
                        cada uno. Para lograrlo existen alternativas, como son las de empezar por las cuantías más pequeñas 
                        o por las que representan mayores tipos de intereses.
                        {<br />}
                        {<br />}
                        Por último, antes de financiar algo, es recomendable preguntarte si el producto o servicio es 
                        imprescindible o si se podría comprar en otro momento. Además sirve como motivación para cuando 
                        cuentes con más dinero para hacerlo o haya una situación más favorable -como puede ser un abaratamiento 
                        de la financiación al bajar los tipos de interés.
                    </Parraph>
                    <Parraph nParraph="3" titleParraph="Evitar los gastos hormiga" isRendered>
                        Existen diferentes enemigos del ahorro como los gastos que realizas diariamente casi sin darte 
                        cuenta y que puedes pensar que, debido a su pequeña cuantía, no afectan a tu salud económica. Se trata, 
                        entre otras, de compras prescindibles o innecesarias: tomar un café cada mañana al salir de casa en la 
                        cafetería, comer en un restaurante todos los días, o la suscripción a un servicio o producto que casi 
                        no usas. Al ser cantidades menores pueden pasar desapercibidas. De todas maneras, si las sumas se 
                        convierten en una parte importante de tus gastos del mes.
                        {<br />}
                        {<br />}
                        Para cumplir con el propósito de mantener bajo control los gastos hormiga, lo primero es reconocerlos, 
                        ser consciente de que existen, y que caes en ellos. Así, la próxima vez que vayas a realizar uno, será 
                        más fácil decidir si te conviene o no. Otra clave es hacer una lista para diferenciar entre tus necesidades, 
                        o prioridades, de tus caprichos o deseos. Puedes utilizarla, por ejemplo, para ir al supermercado y no 
                        gastar de más o en los momentos en los que se presente alguna tentación de compra innecesaria.
                    </Parraph>
                    <img 
                        src="https://www.santander.com/content/dam/santander-com/es/stories/contenido-stories/2021/inclusi%C3%B3n/im-storie-propositos-para-mejorar-la-salud-financiera-1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" 
                        alt="Mujer revisando el telefono con bolsas de compras en los brazos" 
                        style={{padding: "0 5rem"}}
                    />
                    <Parraph nParraph="4" titleParraph="Generar ingresos extra" isRendered>
                        Para mejorar la salud financiera no es requisito que todos los propósitos estén orientados a las 
                        restricciones o privaciones. También es posible establecer algunos que busquen generar ingresos adicionales. 
                        Aquí cada uno tiene la posibilidad de buscar maneras con las que lograr el equilibrio con los gastos y 
                        fomentar el ahorro. 
                        {<br />}
                        {<br />}
                        Una posibilidad es acudir a las opciones que ofrecen las plataformas de economía colaborativa. A través 
                        de diferentes aplicaciones es posible vender ropa, accesorios, electrodomésticos, y aquellos otros 
                        artículos que ya no utilices, y que podrían representar un dinero extra. De esta forma también promueves 
                        un consumo más responsable y contribuyes al cuidado del medioambiente, ya que le estás dando una segunda 
                        vida a dichos objetos.
                        {<br />}
                        {<br />}
                        La inversión es otra opción para cumplir con el propósito de generar ingresos adicionales. A través de 
                        acciones de distintas empresas, fondos de inversión, bonos o depósitos, entre otros productos, es posible 
                        obtener rentabilidad. En este sentido, puedes comprobar que en un escenario con intereses altos no es 
                        negativo en todos los casos: puede ser ventajoso si, en lugar de recurrir a préstamos, eres tú quien 
                        busca que tus ahorros, sin importar la cantidad, generen un rendimiento. Dichos tipos de interés elevados 
                        te beneficiarán si, por ejemplo, tienes un depósito de ahorros, ya que el banco te dará más dinero por el 
                        capital entregado.
                        {<br />}
                        {<br />}
                        La principal recomendación antes de invertir en uno u otro es asesorarse, pues la correcta elección depende 
                        de aspectos como el perfil del inversor, el riesgo que se esté dispuesto a asumir o las expectativas macroeconómicas.
                    </Parraph>
                    <Parraph nParraph="5" titleParraph="Ahorrar es clave" isRendered>
                        Por último, pero no menos importante, dentro de los propósitos para mejorar la salud financiera está la 
                        planificación. Así como no es recomendable gastar por gastar, tampoco se trata de ahorrar por ahorrar. 
                        Se puede poner el foco en hacerlo de una forma organizada y orientada a la consecución de objetivos. Conocer 
                        bien los ingresos y los gastos es el punto de partida para empezar a ordenar las finanzas personales.
                        {<br />}
                        {<br />}
                        Para que la planificación sea exitosa es necesario ser realista con los objetivos marcados pues establecer 
                        metas difíciles de cumplir puede ser contraproducente. Además es común que cause desmotivación, frustración 
                        y abandono de esos objetivos. Es recomendable, por ello, revisar cada cierto tiempo el estado de los propósitos 
                        con el fin de saber si vas por buen camino o si es necesario tomar acciones al respecto.
                    </Parraph>
                </div>
                <div className='wrapNews'>
                    <div className='newsLabel'>
                        <h1>Noticias</h1>
                        <a href="/news">
                            <h3>Ver más</h3>
                        </a>
                    </div>
                    {
                        news.map((n, idx) => {
                            const url = `${n.url}`
                            return (
                              <>
                                <a className='newsCardHome' key={n.id} href={url} target="_blank">
                                  <div className='imgContainer'>
                                    <img src={n.promoImage.url}/>
                                  </div>
                                  <div className='infoContainer'>
                
                                    <div className='infoHeader'>
                                      <p>{n.headline}</p>
                                    </div>
                
                                    <div className='infoDetails'>
                                      <p>{n.authorFormatted}</p>
                                      <p>{n.shortDateFirstPublished}</p>
                                    </div>
                
                                  </div>
                                </a>
                              </>
                            )
                          })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage