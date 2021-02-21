import React, { Component } from 'react'

class Password extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        return(
            <div className="PassW">
                <label>
                    Mot de passe:
                    <input type="password" name="Mot de passe"></input>
                    Confirmez votre mot de pass:
                    <input type="password" name="Confirmation MDP"></input>
                </label>
            </div>
        )
    }
}
export default Password;
