import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';
import { calcularTotal } from './helpers';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner';

class App extends Component {

  state = {
    total:'',
    valor:'',
    plazo:'',
    cargando: false
  }

  datosPrestamo = (valor, plazo) => {
    const total = calcularTotal(valor, plazo);
    //Colocar resultado en el State
    this.setState({
      cargando: true
    }, () =>{
      setTimeout(()=>{
        this.setState({
          total,
          valor,
          plazo,
          cargando: false
        })
      }, 3000);  
    })
  }


  render() {
    const {total, plazo, valor, cargando} = this.state;
    //  Cargar un componente condicional
    let componente;

    if(total === '' && !cargando){
      componente =<Mensaje/>
    }else if(cargando) {
      componente =<Spinner/>
    }else{
      componente =<Resultado
      total={total}
      plazo={plazo}
      valor={valor}
    />
    }

    return (
      <Fragment>
        <h1>Cotizador de prestamos</h1>
        <div className="container">
        <Formulario
        datosPrestamo={this.datosPrestamo}
        />
        <div className="mensajes">
          {componente}
        </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
