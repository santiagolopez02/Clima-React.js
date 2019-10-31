import React from 'react';
import PropTypes from 'prop-types';
//hook
function Clima ({resultado}) {
    console.log(resultado);
    //creo un objeto con los datos de la api
    const {name , main} = resultado;

    if(!name) return null;

    //grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12 ">
            <div className="black-text">
                <h2>El clima en {name} es:</h2>
                <p className="temperatura">
                Temperatura: {parseInt(main.temp - kelvin, 10)}<span>&#xB0;</span>
                </p>
                <p>
                    Temperatura maxima: {parseInt(main.temp_max - kelvin, 10)}&#xB0;
                </p>
                <p>
                    Temperatura minima: {parseInt(main.temp_min - kelvin, 10)}&#xB0;
                </p>
            </div>
        </div>    
     );
}
//documentacion
Clima.propTypes = {
    resultado : PropTypes.object.isRequired
  };



 
export default Clima;   