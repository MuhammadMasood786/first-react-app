import React, { Component }from 'react';
import './App.css';
import FirstComponent from './FirstComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div >
        <FirstComponent Name="Muhammad Masood" Dept="Ubit" Uni="Karachi University"/>
        <hr/>
        <FirstComponent Name="Muhammad Gulfam" Dept="Hamdard University" Uni="Main Campus"/>
        
      </div>
     );
  }
}
 
export default App;
