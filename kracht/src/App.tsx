import './App.css'
import Home from './components/home/Home';
import Nopage from './components/nopage/nopage';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import DigitalTransformatie from './components/thema/digitalTransformatie/digitalTransformatie.tsx';
function App() {

    return (
        <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/thema/digitale-transformatie' element={<DigitalTransformatie />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App;