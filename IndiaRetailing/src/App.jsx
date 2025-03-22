import Header from './components/header'
import Section1 from './components/section1'
import Section2 from './components/section2'

function App() {
  return (
    <div className='app'>
    <Header/>
    <Section1/>
    <Section2/>
    <hr />
    <Section1/>
    <Section2/>
    <Section1/>
    <Section2/>
    </div>
  )
}

export default App
