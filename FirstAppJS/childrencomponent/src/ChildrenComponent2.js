import React from 'react'


 function ChildrenComponentSecond(props) { 

    const { titre, btn, contenu} = props.data
    return (
        <div>
            <h1>{titre}</h1>
            {btn && (<button onClick={btn}>{contenu}</button>)}
        </div>
    )
}
export default ChildrenComponentSecond;