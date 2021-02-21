import React, { Component } from 'react'
import Email from './Component/EmailAdress'
import NameP from './Component/Name'
import Password from './Component/Password'

class Formulaire extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render () {
        return (
            <form className="FormulaireCss">
                <h1>Formulaire d'inscription</h1>
                    <div className="ContenaireF">
                        <NameP />
                        <Email />
                        <Password />
                    </div>
                
                    <input className="BouttonE" type="submit" value="envoyer" />
            </form>
        )
    }
}
export default Formulaire;