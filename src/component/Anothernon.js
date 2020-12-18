//@flow
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
const Anothernon = props=>{
    return(
        <div className="nonactive" onClick={props.addTrip}></div>
        );
    };
    Anothernon.propTypes={
        addTrip: PropTypes.any,
    };
    export default  Anothernon ;