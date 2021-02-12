import  { Component } from 'react';

class Formulaire extends Component {
  constructor(props) { 
  super(props);
  this.state = {str: ""};
  }

onChangeText (text) {
  console.log(text.currentTarget.value)
  this.setState({str: text.currentTarget.value})
}

 render() {
  return (
    
    <div>
      <h1>Liste des clients</h1>
      <form>
  <label>
    Nom :
    <input type="text" name="name" value={this.state.str} onChange={(text)=> this.onChangeText(text)}  />
    <input type="text" name="name" value={this.state.str}/>
  </label>
  <input type="submit" value="Envoyer" />
</form>
      {/* <input type="text"></input> */} 
      <header className="App-header">
      </header>
    </div>
  );
  }
}
export default Formulaire;