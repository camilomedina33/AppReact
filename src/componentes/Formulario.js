import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        valor: '',
        plazo: ''
     }
     calcularPrestamo =(e) =>{
        e.preventDefault();
        //Aplicar desrtructuring
        const {valor, plazo} = this.state;
        //Pasar al componente padre
        this.props.datosPrestamo(valor, plazo);
     }

     actualizarState = (e) =>{
         //Leer datos del formulario
        //console.log(e.target.value)

        const {name, value} = e.target;
        //Actualizar datos del state
        this.setState({
            [name] : Number(value)
        })

     }
             
     habilitarSubmit = () =>{
        //Aplicar destructuring
        const {valor, plazo} = this.state;
        //Leer las varibales
        const noValido = !valor || !plazo;
        console.log(noValido);
        //Rertornar respuestas
        return noValido;
     }

    render() {
        const {valor} = this.state;
        return ( 
            <form onSubmit={this.calcularPrestamo}>
                <div>
                    <label>Valor del prestamo: {valor} </label>
                    <input
                        onChange={this.actualizarState} 
                        type="text" s
                        name="valor" 
                        className="u-full-width"
                        placeholder="Ejemplo: 3000"/>
                </div>
                <div>
                    <label>Plazo para el pago:</label>
                    <select
                        onChange={this.actualizarState}  
                        name="plazo" 
                        className="u-full-width">
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        disabled ={this.habilitarSubmit()}
                        type="submit" 
                        value="calcular" 
                        className="u-full-width button-primary"/>
                </div>
            </form>
         );
    }
}
 
export default Formulario;