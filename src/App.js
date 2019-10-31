import React, {useState, useEffect} from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Error from './componentes/Error'
import Clima from './componentes/Clima'

//import axios from 'axios';
//Redux Hooks

function App() {
  //state princiapl con hook uno para cada state con su set(guardar...)
const [ciudad, guardarCiudad]= useState('');
const [pais, guardarPais]= useState('');
const [error, guardarError]= useState(false);
const [resultado, guardarResultado] = useState({});

//useEffect reeemplaza a los metodos del ciclo de vida didMount o didUpdate
useEffect(()=>{
  //valida el state
  if (ciudad === '') return;
  
  //Consulta api dentro de useEffect
  const consultaApi = async()=>{
    const appId = `444952050b47051c76266fc6537298a8`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`; 
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    console.log(resultado);
    guardarResultado(resultado);
  }
  consultaApi();
},[ciudad, pais]);



  //FUNCION PARA PASAR A FORMULARIO
  const datoConsultas =  datos =>{
  //validar form
  if (datos.ciudad === '' || datos.pais==='') {
    //error
    guardarError(true);
    return;
  }  
  //setea los state con las funciones guardar luego de la condicion
  guardarCiudad(datos.ciudad);
  guardarPais(datos.pais);
  guardarError(false);  
  }

  //cargar un componente con condicion
  let componente
  if (error) {
    componente =<Error mensaje='Debes completar los campos'/>;
  }else{
    componente= <Clima resultado={resultado}/>;
  }
  

  return (
    <div className="App">
      <Header
        titulo="Clima App"
      />
      
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
              datoConsultas={datoConsultas}
              />
            </div>

            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
