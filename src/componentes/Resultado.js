import React from 'react';

const Resultado = (props) => {

    return ( 
        <div className="u-full width resultado">
            <h2>Datos del prestamo</h2>
            <p>El valor del solicitadod el prestamos es: $ {props.valor}</p>
            <p>Debe pagar en un plazo de: {props.plazo} meses</p>
            <p>Valor total a pagar: $ {props.total}</p>
            <p>El pago mensual a realizar es de: $ {(props.total / props.plazo).toFixed(2)}</p>
        </div>
     );
}
 
export default Resultado;