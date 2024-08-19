import './App.css'
import Home from './components/home/Home';
import Nopage from './components/nopage/nopage';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import DigitalTransformatie from './components/thema/digitalTransformatie/digitalTransformatie.tsx';
import Ecommerce from './components/thema/digitalTransformatie/E-commerce.tsx';
import DemandAndLeadGeneration from './components/thema/digitalTransformatie/Demand-and-lead-generation.tsx';
import Recruitment from './components/thema/digitalTransformatie/recruitment.tsx';

function App() {

    return (
        <div className='App'>
        <BrowserRouter>/thema/demand-leadgeneration
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/thema/digitale-transformatie' element={<DigitalTransformatie />} />
                <Route path='/thema/e-commerce' element={<Ecommerce />} />
                <Route path='/thema/demand-leadgeneration' element={<DemandAndLeadGeneration />} />
                <Route path='/thema/recruitment' element={<Recruitment />} />
                <Route path="*" element={<Nopage />} />
            </Routes>/thema/recruitment
        </BrowserRouter>
        </div>
    )
}
export default App;