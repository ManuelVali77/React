import React, { Component } from 'react'

class SimpleComp extends Component {

    render() {
        return(
            <div>
                <p>
                    <span className="blue">Simple Component: </span>
                    {this.props.name}
                </p>
            </div>
        )
    }
}
export default SimpleComp;