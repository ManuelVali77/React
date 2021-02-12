import './App.css';
import  { Component } from 'react';
import Formulaire from './Onchange.jsx';
import Checkboxs from './Checkbox.jsx';
import Loabut from './Loader.jsx';
import { computeHeadingLevel } from '@testing-library/react';
import NaviNav from './Navigation';

class App extends Component {

 render() {
  return (
    <div className="App">
    <header>
       <NaviNav />
    </header>
    
     <Formulaire />
     <Checkboxs />
      <Loabut/>
    </div>
  );
  }
}
export default App;

