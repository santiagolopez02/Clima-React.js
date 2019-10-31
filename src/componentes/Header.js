import React from 'react';
import PropTypes from 'prop-types';
//hook
function Header({titulo}){
    return(
        <nav>
            <div className="nav-wrapper light-red darken-2">
                <a href="#!" className="brand-logo">
                    {/*pasa un prop como titulo*/}
                    {titulo}
                </a>
            </div>
        </nav>
    )

}
//documentacion
Header.propTypes = {
    titulo : PropTypes.string.isRequired
  };


export default Header;