import React,{component,createRef} from 'react'

const cambio=createRef()

const funcionCambio=()=>{
    //alert('REf esta Funcionando')
    cambio.current.style.color='white'
    cambio.current.style.backgroundColor='black'
}

const cambio2=createRef()
const funcionCambio2=()=>{

    cambio2.current.style.color='red'
    cambio2.current.style.backgroundColor='yellow'
}

const CompRefs=()=>{
    return(
        <div>
            <div>
                <h1 ref={cambio}>Probando un Componente con Arrow Function</h1>
                <button onClick={funcionCambio}>Cambio</button>
            </div>
            
            <div>
                <h1 ref={cambio2}>Ejemplo Cambios</h1>
                <button onMouseMove={funcionCambio2}>Cambio2</button>
            </div>
        </div>      
    )   
    
}

export default CompRefs