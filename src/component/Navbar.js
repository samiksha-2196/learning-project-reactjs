//@flow
import React from 'react';
import '../index.css';
class Navbar extends React.Component {
  
    render() {
      return (
        <div>
          <a href="#" className="home">About</a>
          <a href="#" className="blog">Blog</a>
          <a href="#" className="careers">Careers</a>
        </div>
      );
    }
  }
  export default Navbar;