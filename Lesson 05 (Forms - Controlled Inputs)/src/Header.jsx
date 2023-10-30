import React from 'react'

const Header = (props) => {     //First method using props
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

//If the parent does not have the property
Header.defaultProps = {
    title: "Default Title"
}

export default Header
