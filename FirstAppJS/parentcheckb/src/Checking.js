import React, { Component } from 'react'

class Check extends Component {



handleClick = () => {
    
    this.props.parentCallBack()
}
    
    render() {

        return (
            <div>
                <input type='checkbox' onClick={this.handleClick}></input>
            </div>
        )
    }
}

export default Check;
