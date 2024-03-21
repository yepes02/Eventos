import React, { Component } from 'react'


class CicloVida extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        nombre:"marco",
        documento: 1072192,
        ficha: null

    }
    cambiarEstado(){
        //console.log('Prueba')
        this.setState({nombre: 'Yesid', documento: 2912701, ficha: 2627364})
    }
    componentDidMount(){
        console.log('nombre al incio del montaje'+this.state.nombre)
    };
    componentDidUpdate(prevProps,prevState){
        if(prevState === this.state.nombre){
            console.log('Mi estado NO ha cambiado')
           
        } else{
            console.log('Mi estado camibio ahora soy,',this.state.nombnre)
        }

    }
    componemtWillUdmount(){}

    
    render() { 
        return (
            <>
            <h1>Ciclo y Vida React</h1>
            <h2>nombre actual: {this.state.nombre}</h2>
            <h2>documento: {this.state.documento}</h2>
            <h2>Ficha:{this.state.ficha}</h2>
            <button onClick={this.cambiarEstado.bind(this)}>Cambiar cilo de vida</button>
            </>
          );
    }
}
 
export default CicloVida;