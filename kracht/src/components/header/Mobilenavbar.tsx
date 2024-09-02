
import React, { useState } from 'react';
import './headerandnav.css'
import { Link } from 'react-router-dom';

type DropdownType = 'diensten' | 'over-ons' | null;


const Mobilenavbar:React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);


  const openNav = () => {
    setIsNavOpen(true);
  };
  
  const closeNav = () => {
    setIsNavOpen(false);
  };
  const handleDropdownToggle = (dropdown: DropdownType) => {
    setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
  };



  return (
    <div>
    <div
  className={`lg:hidden fixed top-10 right-4 z-[99999] cursor-pointer text-white`}
  onClick={openNav} 
  style={{
    height: isNavOpen ? '0vh' : '20vh',
    overflow: 'hidden',
  }}
>
  <div className="space-y-2 bg-white w-14 h-14 flex flex-col justify-center items-center rounded-full">
    <div className="w-7 h-[2px] bg-black "></div>
    <div className="w-7 h-[2px] bg-black"></div>
  </div>
</div>
    <div
      className={`lg:hidden fixed top-0 left-0 w-full h-full z-[99999] transition-all duration-700 ease-in-out`}
      style={{
        
        height: isNavOpen ? '100vh' : '0vh',
        overflow: 'hidden',
        backgroundColor:'#0c1c25'
      }}
    >
      <div className="relative h-full">
        <div className="absolute left-0 top-0 w-full h-full z-[105]">
          <div className="container mx-auto h-full"
          >
            <div className="pt-12 w-full flex justify-end items-center z-[100] cursor-pointer"onClick={closeNav}
            >
              <div className="cursor-pointer flex items-center gap-3 mr-4" 
                    >
                <span className="text-white text-base">sluiten</span>
                <div className="flex flex-col gap-2  ">
                  <span className="block h-[2px] w-[22px] bg-white transition-transform duration-300 ease-in-out delay-150 rotate-45 translate-y-[5px]"></span>
                  <span className="block h-[2px] w-[22px] bg-white transition-transform duration-300 ease-in-out delay-150 -rotate-45 translate-y-[-5px]"></span>
                </div>
              </div>
            </div>
            <nav className="mt-10 relative  flex flex-col justify-center lg:justify-start items-start gap-4">
              <div className="w-full">
                <div
                  className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer"
                  onClick={() => handleDropdownToggle('diensten')}
                >
                  diensten
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'diensten' ? 'rotate-90' : '-rotate-90'}`}
                  >
                    <path
                      d="M5.70711 4.29289L10 1.68643e-08C10 1.68642e-08 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L1.92421e-06 1.41421C1.92421e-06 1.41421 1.41422 1.19249e-07 1.41422 1.19249e-07L5.70711 4.29289Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                {activeDropdown === 'diensten' && (
                  <div className="mt-6">
                    <Link to="/thema/" className="px-6 py-3 w-full bg-white/10 text-white rounded-full block cursor-pointer">Uitdagingen</Link>
                    <Link to="/thema/digitale-transformatie/" className="px-6 py-3 block w-full text-white text-base rounded-full">digitale transformatie</Link>
                    <Link to="/thema/e-commerce/" className="px-6 py-3 block w-full text-white text-base rounded-full">e-commerce</Link>
                    <Link to="/thema/demand-leadgeneration/" className="px-6 py-3 block w-full text-white text-base rounded-full">demand & lead generation</Link>
                    <Link to="/thema/recruitment/" className="px-6 py-3 block w-full text-white text-base rounded-full">recruitment marketing</Link>
                  </div>
                )}
              </div>
              <div className="w-full">
                <div
                  className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer"
                  onClick={() => handleDropdownToggle('over-ons')}
                >
                  over ons
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'over-ons' ? 'rotate-90' : '-rotate-90'}`}
                  >
                    <path
                      d="M5.70711 4.29289L10 1.68643e-08C10 1.68642e-08 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L1.92421e-06 1.41421C1.92421e-06 1.41421 1.41422 1.19249e-07 1.41422 1.19249e-07L5.70711 4.29289Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                {activeDropdown === 'over-ons' && (
                  <div className="mt-6">
                    <Link to="/over-ons/" className="px-6 py-3 block w-full text-white text-base rounded-full">over ons</Link>
                    <Link to="/over-ons/werkwijze/" className="px-6 py-3 block w-full text-white text-base rounded-full">werkwijze</Link>
                    <Link to="/over-ons/duurzaam-ondernemen/" className="px-6 py-3 block w-full text-white text-base rounded-full">duurzaam ondernemen</Link>
                  </div>
                )}
              </div>
              <Link to="/work-hard-play-harder/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">jobs</Link>
              <Link to="/cases/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">cases</Link>
              <Link to="/blogs/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">blogs</Link>
              <Link to="/contact/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Mobilenavbar;