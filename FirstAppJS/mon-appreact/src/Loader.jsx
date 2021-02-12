import React,  { Component } from 'react';
import ReactLoading from 'react-loading';

class Loabut extends Component {
    constructor(props) {
        super(props)
        this.state = {Loading : false}
    }

handleClick= () => {
    this.setState({Loading: true})
    setTimeout(() => {
        this.setState({Loading: false})
    }, 5000);


}
render() {
    const {Loading} = this.state
    return (
        <div>
            {Loading ? "" : <button onClick={this.handleClick}>Le bouton fait un Load</button>} 
            {Loading ? <ReactLoading type="balls" color="red"/> : ""}
            
        </div>
    )
}
}

export default Loabut;