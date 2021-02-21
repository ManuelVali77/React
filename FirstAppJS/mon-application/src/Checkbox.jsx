import { Component } from 'react';

class CheckB extends Component {
    constructor(props) {
        super(props)
        this.state = {check: false}
    }

handleClick = () => {
    console.log("Cela fonctionne yeah!")
    this.setState({check: !this.state.check})

}

render () {
    return (
        <div>
            <h1>CheckBox Baby!</h1>
            <button onClick={this.handleClick}>Appuie sur ce bouton</button>
            <input type="checkbox" checked={this.state.check}></input>
        </div>
    )
}    
}
export default CheckB;