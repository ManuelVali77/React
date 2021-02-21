import React, { Component} from 'react'
import Check from './Checking'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isDisabled: true
        }
    }
    

    callBackFunction = (ChildData) => {
        this.setState({
            isDisabled: ChildData
        })
    }

    render() {
        return (
            <div className="App">

                <Check parentCallBack= {this.callBackFunction} />
                <button disabled={this.state.isDisabled}>Non dispo</button>

            </div>
        )
    }
}
export default Parent;