import './index.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Recap from './Recap'

function App() {
  // const handleNameChange = () => {
  //   const names = ["Ali", "Dave", "Brisa"];
  //   const int = Math.floor(Math.random() * 3)
  //   return names [int]
  // }

  return (
    <div className='App'>
    
        {/* Hello {handleNameChange()} */}
        < Header />
        < Content />
        < Footer />
        < Recap />
  
    </div>
  )
}

export default App
