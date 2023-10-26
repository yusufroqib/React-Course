import React, { useState } from 'react'


const Content = () => {
    const [name, setName] = useState('Kenny')

    const handleNameChange = () => {
        const names = ["Ali", "Dave", "Brisa"]
        const int = Math.floor(Math.random() * 3)
           setName(names[int])
    }

    const handleClick = () => {
        console.log("You clicked it");
    }

    const handleClickOne = (names) => {
        console.log(`${names} was clicked`);
    }

    const handleClickTwo = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p>
                Hello {name}
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={() => handleClickOne('Director')}>Click Name!</button>
            <button onClick={(e) => handleClickTwo(e)}>Click Now</button>
        </main>
    )
}

export default Content
