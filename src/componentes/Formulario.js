import React, {useState}from 'react';
import PropTypes from 'prop-types'

//hook (componente como funcion con state)
function Formulario({datoConsultas}){
    
 //state del componente
 //busqueda = state, guardarBusqueda=this.setState()
    const [busqueda, guardadBusqueda]= useState({
        ciudad :'',
        pais:''
    })

    //metodo handleChange o concretar el cambio de algo
    const handleChange= e =>{
    //almacenar el state en la funcion guardarBusqueda
        guardadBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
       
    }

    const consultarClima= e =>{
        e.preventDefault();
        console.log("detecta click");
        //pasar al componente app los datos de busqueda()
        datoConsultas(busqueda);
    }
    

return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select
                    onChange={handleChange}
                    name="pais"
                >
                    <option value="">--SELECCIONA EL PAIS--</option>
                    <option value="US">EEUU</option>
                    <option value="AR">ARGENTINA</option>
                    <option value="CO">COLOMBIA</option>
                    <option value="CR">COSTA RICA</option>
                    <option value="MX">MEXICO</option>
                    <option value="ES">ESPAÑA</option>
                    <option value="PE">PERU</option>
                </select>
            </div>

            <div className="input-field col s12">
                 <input 
                 type="submit" 
                 className=" waves-effect waves-ligth btn-large btn-block yellow accent-4"
                 value ="Consultar"
                 /> 
            </div>
        </form>
    )

}
//documentacion
Formulario.propTypes = {
    datoConsultas : PropTypes.func.isRequired
  };

export default Formulario;