import React, {Component} from 'react';
import Counter from "./Counter"
import './App.css';

class App extends Component {
  render(){
   return ( 
   <div>
   <Counter start={10}/>
   </div>
   );
  }
}

export default App;