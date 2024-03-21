import React, { Component } from 'react'

class PruebaState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:"Marco Yepes",
            documento:1072192478  
        };
    }

    modificaEstado(){
        if(this.state.nombre==="Marco Yepes"&& this.state.documento===1072192478){
            this.setState({nombre:'Yesid Yepes', documento:8742912701})
        }
    }
        render() { 
            return (
                <>
                <h1>Prueba GitHub Eventos y Estados</h1>
                <h2>Nombre del estado: {this.state.nombre}</h2>
                <h2>Documento del estado: {this.state.documento}</h2>
                <button onClick={this.modificaEstado.bind(this)}>Cambio</button>
                </>
            );
        }
    }

export default PruebaState;


