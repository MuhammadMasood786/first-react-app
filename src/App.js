import React, { Component }from 'react';
import './App.css';
import Navbar from './FirstComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div >
        <Navbar/>
      </div>
     );
  }
}
 
export default App;
