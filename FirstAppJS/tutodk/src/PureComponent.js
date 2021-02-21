import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    render() {
        return (
            <div>
                <p>
                    <span className="green">Pure Component: </span>
                    {this.props.name}
                </p>
            </div>
        )
    }
}
export default PureComp;