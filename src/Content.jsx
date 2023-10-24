import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["Ali", "Dave", "Brisa"]
        const int = Math.floor(Math.random() * 3)
            return names[int]
    }

    const handleClick = () => {
        console.log("You click it");
    }

    const handleClickOne = (names) => {
        console.log(`${names} was clicked`);
    }

    const handleClickTwo = () => {
        
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={() => handleClickOne('Director')}>Click Name!</button>
        </main>
    )
}

export default Content
