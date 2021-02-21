
import './App.css';
import { Component } from 'react';
import CheckB from './Checkbox.jsx';
import Formulaire from './Formulary.jsx';
import Load from './Loader.jsx';
import DoubleButton from './DoubleBouton';

class App extends Component {

render() {
  return (
    <div className="App">
      <header></header>
      <body>
        <CheckB />
        <Formulaire />
        <Load />
          <footer>
            <DoubleButton />
          
          </footer>
      </body>
    </div>
  )
}
}
export default App;
