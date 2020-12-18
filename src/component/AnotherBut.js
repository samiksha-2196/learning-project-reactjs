//@flow
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
const AnotherBut= props =>{
    return(
        <div className="activec" onClick={props.addTrip}></div>
        );
    };
    AnotherBut.propTypes={
        addTrip:PropTypes.any,
    };
    export default  AnotherBut;