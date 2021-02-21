import React, { Component } from 'react'

class DoubleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {disabled: true}
    }
 
    handleClick = () => {
            setTimeout(() => {
            this.setState({
            disabled: !this.state.disabled
            })
        }, 2000);
    }

    render () {
        return (
            <div>
                <h1>Super bgood</h1>
                <button onClick={this.handleClick} disabled={!this.state.disabled}>Bouton A</button>
               <button disabled={this.state.disabled} onClick={this.handleClick}>Bouton B</button>
            </div>
        )
    }

}
export default DoubleButton;