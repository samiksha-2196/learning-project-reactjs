//@flow
import React, {useState} from 'react';
import PropTypes from 'prop-types';
 import '../index.css';
 import close from '../assets/Close.svg';
 import fb from '../assets/FB-icon-black.png';
 import lnd from '../assets/linkedin-icon-black.png';
 import twit from '../assets/Twitter-icon-black.png'; 
 import SUBMIT_DATA from '../graphql/mutation';
 import { useMutation } from "@apollo/client";
const Popup = props => {
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [addTodo] = useMutation(SUBMIT_DATA);
  return (
    <div className="popup-box">
      <div className="yu">
        <img className="close-icon" onClick={props.handleClose} src={close}/>
        <div className="Con">Contact</div>
        <div className="lor">Lorem Ipsum is simply dummy text of the printing</div>
        <form onSubmit={(e) => {
             e.preventDefault();
             addTodo({variables:{mail:email,message:message}});
           }}>
          <div className="Name">Name</div>
          <input type="text" name="name" placeholder="Enter your name here" className="nameinp"/>
          <div className="email">E-mail</div>
        <input type="email" name="email-address" placeholder="Enter your email address here" className="mailinp"value={email}onChange={e=>setEmail(e.target.value)}/>
        <div className="mess">Message</div>
        <input type="text" placeholder="Wanna share something with us?" className="messageinp"value={message}onChange={e=>setMessage(e.target.value)}/>
        <input type="submit" value="submit" className="sub"></input>
        <div className="need">Need more info? hello@newzera.com</div>
        <img src={fb} className="ty"/>
        <img src={lnd} className="yt"/>
        <img src={twit} className="pq"/>
        </form>
      </div>
    </div>
  );
};
Popup.propTypes={
  handleClose: PropTypes.any,
};
export default Popup;
