import { Component} from 'react';
import ReactLoading from 'react-loader';

class Load extends Component {
    constructor(props) {
        super(props)
        this.state = {Loading: false}
    }

handleClick = () => {
    this.setState({Loading: true})
    setTimeout(() => {
        this.setState({Loading: false})
    }, 5000);
}

 render () {
     const {Loading} = this.state
     return (
         <div>
             <h1>Le super Loader!</h1>
             {Loading ? "" : <button onClick={this.handleClick}>Le bouton fait un Load</button>}
            {Loading ? <ReactLoading type="ball" color="green" /> : ""}
         </div>

     )
 }       
    }
export default Load;