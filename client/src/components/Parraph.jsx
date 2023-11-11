import '../styles/componentsStyles/Parraph.css'

function Parraph({nParraph, titleParraph, children, isRendered}) {
    return (
        <>
            {isRendered && (
                <div className='pContainer'>
                    <p className='pTitle'>{nParraph}. {titleParraph}:</p>
                    <p className='pText'>{children}</p>
                </div>
            )}
        </>
    )
}

export default Parraph;