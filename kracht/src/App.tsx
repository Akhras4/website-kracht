
import './App.css'
import Header from './components/header/header'
import Mobilenavbar from './components/header/Mobilenavbar'
import Light from './components/light/light'
import Main from './components/main/main'

function App() {

  return (
    <div className='App'>
       <Light />
      <Header />
      <Mobilenavbar />
      <Main />
     
    </div>
  )
}

export default App
