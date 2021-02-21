import { Component } from 'react'

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {str: ""};
    }

onChange(text) {
    console.log(text.currentTarget.value)
    this.setState({str: text.currentTarget.value})

}

render() {
    return (
        <div>
            <h1>Liste des clients</h1>
            <form>
                <label>
                    Nom:
                    <input type="text" name="name" value={this.state.str} onChange={(text)=> this.onChange(text)} />
                    <input type="text" name="name" value={this.state.str}/>
                </label>
                <input type="submit" value="envoyer" />
            </form>
        </div>
    )
}
}
export default Formulaire;