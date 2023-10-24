import React from 'react'

const Header = () => {
    const headerStyle = {
        backgroundColor: "black",
        color: "#fff",
        borderRadius: "10px",
        padding: "1px 20px"
    }

    return (
        <header style={headerStyle}>
            <h1>WELCOME TO REACT IN DETAILS</h1>
            <h2 style={{color: 'yellow'}}>WELCOME TO DLT-AFRICA BOOTCAMP</h2>
        </header>
    )
}

export default Header
