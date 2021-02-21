import React, { Component } from 'react'

class NameP extends Component {
    constructor(props) {
        super(props)
    
        this.state = {prenom: "", nom:""};
    }

    nomF(text) {
        console.log(text.currentTarget.value)
        this.setState({nom: text.currentTarget.value})
    }
    prenomF(text) {
        console.log(text.currentTarget.value)
        this.setState({prenom: text.currentTarget.value})
    }

    render () {
        return (
            <div className="NamePm">
                <label>
                        Nom:
                <input type="text" name="Name" value={this.state.nom} onChange={(text)=> this.nomF(text)}></input>
                        Prénom:
                <input type="text" name="First Name" value={this.state.prenom} onChange={(text)=> this.prenomF(text)}></input>
                </label>
            </div>
        )
    }
}
export default NameP;