// import './index.css'
import Content from './Content'
import Counter from './Counter'
import Footer from './Footer'
import Header from './Header'

function App() {

  return (
    <div className='App'>
        <Header />                        {/* Custom Element */}
        <Content />                       {/* Custom Element */}
        <Counter />
        <Footer />                         {/* Custom Element */}
    </div>
  )
}

export default App
