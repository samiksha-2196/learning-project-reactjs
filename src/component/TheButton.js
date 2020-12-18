//@flow
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
const TheButton = props => {
    return(
        <div className="activecircle" onClick={props.addTrip}></div>
        );
    };
    TheButton.propTypes={
        addTrip: PropTypes.any,
    };
    export default  TheButton;