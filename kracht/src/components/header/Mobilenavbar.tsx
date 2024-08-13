
import React, { useState } from 'react';
import './headerandnav.css'

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
  {/* Hamburger Icon */}
  <div className="space-y-2">
    <div className="w-8 h-1 bg-black"></div>
    <div className="w-8 h-1 bg-black"></div>
    <div className="w-8 h-1 bg-black"></div>
  </div>
</div>
    {/* Navigation Menu */}
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
            {/* Close Button */}
            <div className="pt-12 w-full flex justify-end items-center z-[100] cursor-pointer"onClick={closeNav}
            >
              <div className="cursor-pointer flex items-center gap-3 mr-4" 
                    >
                <span className="text-white text-base">sluiten</span>
                <div className="flex flex-col gap-2">
                  <span className="block h-[2px] w-[22px] bg-white transition-transform duration-300 ease-in-out delay-150 rotate-45 translate-y-[5px]"></span>
                  <span className="block h-[2px] w-[22px] bg-white transition-transform duration-300 ease-in-out delay-150 -rotate-45 translate-y-[-5px]"></span>
                </div>
              </div>
            </div>
            {/* Navigation Links */}
            <nav className="mt-10 relative  flex flex-col justify-center lg:justify-start items-start gap-4">
              {/* Dropdown for 'diensten' */}
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
                    xmlns="http://www.w3.org/2000/svg"
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
                    <a href="/thema/" className="px-6 py-3 w-full bg-white/10 text-white rounded-full block cursor-pointer">Uitdagingen</a>
                    <a href="/thema/digitale-transformatie/" className="px-6 py-3 block w-full text-white text-base rounded-full">digitale transformatie</a>
                    <a href="/thema/e-commerce/" className="px-6 py-3 block w-full text-white text-base rounded-full">e-commerce</a>
                    <a href="/thema/demand-leadgeneration/" className="px-6 py-3 block w-full text-white text-base rounded-full">demand & lead generation</a>
                    <a href="/thema/recruitment/" className="px-6 py-3 block w-full text-white text-base rounded-full">recruitment marketing</a>
                  </div>
                )}
              </div>
              {/* Dropdown for 'over ons' */}
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
                    <a href="/over-ons/" className="px-6 py-3 block w-full text-white text-base rounded-full">over ons</a>
                    <a href="/over-ons/werkwijze/" className="px-6 py-3 block w-full text-white text-base rounded-full">werkwijze</a>
                    <a href="/over-ons/duurzaam-ondernemen/" className="px-6 py-3 block w-full text-white text-base rounded-full">duurzaam ondernemen</a>
                  </div>
                )}
              </div>
              {/* Other menu items */}
              <a href="/work-hard-play-harder/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">jobs</a>
              <a href="/cases/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">cases</a>
              <a href="/blogs/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">blogs</a>
              <a href="/contact/" className="px-6 py-3 w-full bg-white/10 text-white text-base rounded-full flex items-center justify-between hover:bg-white/50 duration-200 cursor-pointer">contact</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Mobilenavbar;