// import './index.css'
import Content from './Content'
import Counter from './Counter'
import Footer from './Footer'
import Header from './Header'
import InputField from './inputField'

function App() {

  return (
    <div className='App'>
        <Header />                        {/* Custom Element */}
        <Content />                       {/* Custom Element */}
        <Counter />
        <InputField />
        <Footer />                         {/* Custom Element */}
    </div>
  )
}

export default App
