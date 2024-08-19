import './App.css'
import Home from './pages/home/Home.tsx';
import Nopage from './pages/nopage/nopage.tsx';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import DigitalTransformatie from './components/thema/digitalTransformatie/digitalTransformatie.tsx';
import Ecommerce from './components/thema/digitalTransformatie/E-commerce.tsx';
import DemandAndLeadGeneration from './components/thema/digitalTransformatie/Demand-and-lead-generation.tsx';
import Recruitment from './components/thema/digitalTransformatie/recruitment.tsx';
import Footer from './components/footer/footer.tsx';
import Emailms from './components/emailms/eamilms.tsx';
import Header from './components/header/header.tsx';
import Mobilenavbar from './components/header/Mobilenavbar.tsx';



function App() {
    return (
        <div className='App'>
            <Header />
            <Mobilenavbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home /> }  />
                    <Route path='/thema/digitale-transformatie' element={<DigitalTransformatie />} />
                    <Route path='/thema/e-commerce' element={<Ecommerce />} />
                    <Route path='/thema/demand-leadgeneration' element={<DemandAndLeadGeneration />} />
                    <Route path='/thema/recruitment' element={<Recruitment />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </BrowserRouter>
        <Emailms />
        <Footer />
        </div>
    )
}
export default App;