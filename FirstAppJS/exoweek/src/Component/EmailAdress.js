import React, { Component } from 'react'

class Email extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        return (
            <div className="EmailA">
                <label>
                Adresse Email:
                <input type="email" name="adresse email"></input>
                </label>
            </div>
        )
    }
}
export default Email;