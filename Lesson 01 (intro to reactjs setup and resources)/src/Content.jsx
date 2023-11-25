const Content = () => {

    const handleNameChange = () => {
        const names = ["Ali 👋", "Dave 👋", "Brisa 👋"];
        const int = Math.floor(Math.random() * 3)
        //Math.random btw 0.0000000000001 to 0.999999999999999 * 3
        //from 0.00008 to 2.99999999999
        //0 to 2  (0, 1, 2)
        // names[0]
        return names[int]
    }

    const handleClick = () => {
        console.log("you click it");
    }

    const handleClickOne = (names) => {
        console.log(`${names} was clicked`);
    }

    const handleClickTwo = (e) => {
        console.log(e.target.innerText)
    }

    const styling = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px"
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
            <div style={styling}>
                <button onClick={handleClick}><span>Click it</span></button>
                <button onClick={() => handleClickOne('Muhammad')}><span>Click name</span></button>
                <button onClick={(e) => handleClickTwo(e)}><span>Click Now</span></button>
            </div>

        </main>
    )
}

export default Content
