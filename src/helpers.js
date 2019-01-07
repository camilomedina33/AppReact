export function calcularTotal(valor, plazo){
    //Interes
    // Valor del prestamo
    //0 a 100 = 25%
    //1001 a 5000 = 20%
    //5001 a 10000 = 15%

    let totalCantidad;

    if(valor <= 1000){
        totalCantidad = valor * .25;
    }else if(valor > 1000 && valor <=5000){
        totalCantidad = valor * .20;
    }else if(valor > 1000 && valor <=5000){
        totalCantidad = valor * .15;
    }else{
        totalCantidad = valor * .10;
    }

    // Meses
    // 3 = 5%
    // 6 = 10%
    //12 = 15%
    //24 = 20%

    let totalPlazo;
     
    switch (plazo){
        case 3: totalPlazo = valor * .05;
        break;
        case 6: totalPlazo = valor * .1;
        break;
        case 12: totalPlazo = valor * .15;
        break;
        case 24: totalPlazo = valor * .2;
        break;
        default:
        break;
    }
    return valor + totalPlazo + totalCantidad;
}