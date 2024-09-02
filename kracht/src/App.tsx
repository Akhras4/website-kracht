import './App.css'
import Home from './pages/home/Home.tsx';
// import Nopage from './pages/nopage/nopage.tsx';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import DigitalTransformatie from './components/thema/digitalTransformatie/digitalTransformatie.tsx';
import Ecommerce from './components/thema/digitalTransformatie/E-commerce.tsx';
import DemandAndLeadGeneration from './components/thema/digitalTransformatie/Demand-and-lead-generation.tsx';
import Recruitment from './components/thema/digitalTransformatie/recruitment.tsx';
import Footer from './components/footer/footer.tsx';
import Emailms from './components/emailms/eamilms.tsx';
import Header from './components/header/header.tsx';
import Mobilenavbar from './components/header/Mobilenavbar.tsx';
import Digitalbusinessstrategy from './pages/diensten/digitalbusinessstrategy.tsx';
import Digitalmarketing from './pages/diensten/digitalmarketing.tsx';
import Socialcontent from './pages/diensten/socialcontent.tsx'
import Designentechnology from './pages/diensten/designentechnology.tsx'
import Overons from './pages/overons/overons.tsx';
import Duurzaamondernemen from './pages/overons/duurzaamondernemen.tsx';
import Werkwijze from './pages/overons/werkwijze.tsx';
import Workhardplayharder from './pages/jobs/workhardplayharder.tsx';
import Contact from './pages/contact/contact.tsx';
import Nopage from './pages/nopage/nopage.tsx';
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
                    <Route path='/diensten/digital-business-strategy' element={<Digitalbusinessstrategy />} />
                    <Route path='/diensten/digital-marketing/' element={<Digitalmarketing />} />
                    <Route path='/diensten/design-en-technology/' element={<Designentechnology />} />
                    <Route path='/diensten/social-content/' element={<Socialcontent />} />
                    <Route path='/over-ons/' element={<Overons/>} />
                    <Route path='/over-ons/duurzaam-ondernemen/' element={<Duurzaamondernemen />} />
                    <Route path='/over-ons/werkwijze/' element={<Werkwijze />} />
                    <Route path='/work-hard-play-harder/' element={<Workhardplayharder />} />
                    <Route path='/contact/' element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </BrowserRouter>
        <Emailms />
        <Footer />
        </div>
    )
}
export default App;