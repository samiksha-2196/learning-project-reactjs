//@flow
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
const NonactiveBut = props => {
    return(
        <div className="nonactivecircle" onClick={props.addTrip}></div>
        );
    };
    NonactiveBut.propTypes={
        addTrip: PropTypes.any,
    };
    export default  NonactiveBut;