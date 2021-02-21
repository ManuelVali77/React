import React, { Component } from 'react'


class ChildrenComponentFirst extends Component {

    render() {
        const {titre, btn, contenu} = this.props.data
        return (
            <div>
                <h1>{titre}</h1>
                {btn && (<button onClick={btn}>{contenu}</button>)}
            </div>
        )
    }
}
export default ChildrenComponentFirst;