import React from 'react';
import PropTypes from 'prop-types'


const Error = ({mensaje}) => {
    return ( 
        <div className="card-panel red darken-4 error col s12">
            {mensaje}
        </div>
     );
}
//documentacion
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;