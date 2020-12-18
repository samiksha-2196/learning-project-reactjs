//@flow
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
const Contact = props => {
    return <a href="#" onClick={props.addTrip} className="contact">Contact</a>
  }
  Contact.propTypes={
    addTrip: PropTypes.any,
};
export  default Contact;