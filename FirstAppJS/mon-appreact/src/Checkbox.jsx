import  { Component } from 'react';

class Checkboxs extends Component {
    constructor(props) { 
    super(props)
    this.state = {check: false}

    }

handleClick = () => {
    console.log("coucou")
    this.setState({check: !this.state.check})
}


render() {
    return (
        <div>
            <h1>CheckBox!</h1>
            <button onClick={this.handleClick}>Appuyez sur le bouton!</button>
            <input type="checkbox" checked={this.state.check}></input>
        </div>
    )
    }
}

export default Checkboxs;