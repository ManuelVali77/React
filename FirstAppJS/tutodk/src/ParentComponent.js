import React, { Component, PureComponent } from 'react'
import SimpleComp from './SimpleComponent'
import PureComp from './PureComponent'
import FunctionComp from './FunctionComponent'


class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "SpiderMan"
        }
    }
    changeToBatman = () => { 
    this.setState({
        name: "Batman"
    })
    }

    render() {
        return (
            <div>
                <p>
                    <span className="red">Parent Component :</span>
                    {this.state.name}
                </p>

                <SimpleComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <FunctionComp name={this.state.name}/>

                <button onClick={this.changeToBatman}>Changer en Batman</button>
            </div>
        )
    }
}
export default ParentComponent;