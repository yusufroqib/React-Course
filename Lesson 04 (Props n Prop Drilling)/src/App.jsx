import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import ListComponent from './ListComponent'


function App() {

  return (
    <div className='App'>
        <Header />                        {/* Custom Element */}
        <Content />                       {/* Custom Element */}
        {/* <ListComponent /> */}
        <Footer />                         {/* Custom Element */}
    </div>
  )
}

export default App
