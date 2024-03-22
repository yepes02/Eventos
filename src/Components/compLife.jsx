import React, { Component } from 'react'

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Componente montado');
    // Actualizar el estado cada segundo
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Componente actualizado');
    console.log('Estado previo:', prevState);
    console.log('Estado actual:', this.state);
  }

  componentWillUnmount() {
    console.log('Componente desmontado');
    clearInterval(this.intervalId);
  }

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log('Renderizado');
    return (
      <div>
        <h1>Ciclo de vida del componente</h1>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Incrementar contador</button>
      </div>
    );
  }
}

export default LifecycleComponent;