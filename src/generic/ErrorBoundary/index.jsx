import React,{ Component } from 'react';

class ErrorBoundary extends Component {

    //construcción e instancia del elemento al rendereizar
    constructor(props) {
        
        super(props)// se reciben las propiedades del componente    
        
        //acceso inicial del componente (state)
        this.state = { 
            active: false,
            hasError: false
        }

    } 

    //Manejo del montaje del componente
    componentDidMount() {
        console.log("Componente montado")
    }

    isActive = () => {
        return this.state.active ? "Activo" : "Inactivo"
    } 

    clickHandler = () => {
        this.setState({active:true, hasError: false})
    }

    //Manejo de modificaciones/ actulizaciones del componente
    componentDidUpdate(prev, state){
        console.log("Estado anterior:",state.active)
        console.log("Estado actual:",this.state.active)
        console.log("Componente actualizado")   
    }

    //Desmontaje de un componente
    componentWillUnmount() {
        console.log("Componente desmontado")
    }

    //Se captura error y se muestra en un formulario para la interfaz
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    //Captura la excepción causada por el error
    componentDidCatch(error, info) {
        console.log("info del error",info)
    }

    render() {
        return (
            this.state.hasError ? 
            (<h1>Hubo un error</h1>) 
            : 
            (<div>
                <button onClick={this.clickHandler}>Activar</button>
                <h1>{this.props.children} {this.isActive()}</h1>
            </div>)
        )
    }
}

export default ErrorBoundary