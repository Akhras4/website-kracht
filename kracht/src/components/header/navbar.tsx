import React from "react";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
 

  return (
    <div className="hidden lg:flex items-center p-3 bg-dark rounded-[56px] pointer-events-auto" style={{ backgroundColor: '#0c1c25' }}>
      <div

        className="fixed py-2 px-5 bg-[#0c1b24] rounded-full duration-200 ease-in-out z-0 "
        style={{ opacity: 0 }}
      ></div>

      <div  slide-hover="1" className="group py-2 px-5 relative z-10 rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
        <Link
          to="/diensten/social-content/"
          aria-current="page"
          className="flex items-center gap-1   "
          target="_self"
          title="diensten"
        >
          diensten
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 w-3 h-3 group-hover:rotate-180 duration-300"
          >
            <path
              d="M5.70711 4.29289L10 0C10 0 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L0 1.41421C0 1.41421 1.41422 0 1.41422 0L5.70711 4.29289Z"
              fill="white"
            ></path>
          </svg>
        </Link>

         <div className="pt-6 absolute top-full -right-96 w-[85vw] max-w-[1100px] h-full pointer-events-none group-hover:pointer-events-auto">
          <div
            
            className="bg-[#0c1b24] p-5 bg-dark rounded-[20px] -translate-y-[15%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-out flex flex-row items-start justify-start z-0"
          >
            <div className="w-1/2 ">
              <div>
                <Link to="/thema/" >
                  <h4 className="text-[28px] font-bold">Uitdagingen</h4>
                </Link>
              </div>
              <div className="mt-4 -ml-6 flex flex-col items-start ">
                <div
                slide-hover="1"
                  slide-hover-background="2"
                  className="fixed py-4 px-6  rounded-full duration-200 ease-in-out z-0"
                ></div>
                <Link to="/thema/digitale-transformatie/"  className="z-10 py-4 mx-4 px-6 rounded-[24px] text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out " slide-hover="2">
                  Digitale transformatie
                </Link>
                <Link to="/thema/e-commerce/" className="z-10 w-52 py-4 px-6 mx-4 rounded-[24px] text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out " slide-hover="2">
                  E-commerce
                </Link>
                <Link to="/thema/demand-leadgeneration/" className="z-10 py-4 px-6 mx-4 rounded-[24px] text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out " slide-hover="2">
                  Demand &amp; lead generation
                </Link>
                <Link to="/thema/recruitment/" className="z-10 py-4 px-6 mx-4 rounded-[24px] text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out " slide-hover="2">
                  Recruitment marketing
                </Link>
              </div>
            </div>
            <div className="">
              <div>
                <Link to="/diensten/" >
                  <h4 className="text-[28px] font-bold">Oplossingen</h4>
                </Link>
              </div>
              <div className="mt-2 -ml-6 grid grid-cols-2">
                <div
                  slide-hover-background="3"
                  className="fixed p-6 bg-[#0c1b24] text-[1.1rem]  duration-200 ease-in-out z-0"
                  
                ></div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]  text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
                  <Link to="/diensten/digital-business-strategy/" >
                    <h6 className="mb-3 text-[20px] hover:text-white  text-left font-bold">digital business strategy</h6>
                    <p className="text-[1rem]">
                      Business development, Strategie, innovatie, digitale transformatie, digitale infrastructuur, content strategie
                    </p>
                  </Link>
                </div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]  text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
                  <Link to="/diensten/design-en-technology/" >
                    <h6 className="mb-3 text-[1.1rem] hover:text-white  text-left font-bold">design &amp; technology</h6>
                    <p className="text-[1rem]">
                      Applicaties, portals, configuratoren, e-commerce, corporate sites, recruitment sites, AI &amp; machine learning
                    </p>
                  </Link>
                </div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]  text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
                  <Link to="/diensten/digital-marketing/" >
                    <h6 className="mb-3 text-[1.1rem] hover:text-white   text-left font-bold">digital marketing</h6>
                    <p className="text-[1rem]">
                      Growth hacking, data &amp; automation, Google Ads, Social ads, SEO, CRO, e-mailmarketing, marketplaces
                    </p>
                  </Link>
                </div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]  text-[1.1rem] text-left font-medium  hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
                  <Link to="/diensten/social-content/" className=" hover:text-white ">
                    <h6 className="mb-3 text-[1.1rem] hover:text-white   text-left  font-bold">social content</h6>
                    <p className="text-[1rem]" >Snackable content, TikTok ads, TikTok strategie, podcast</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </div>


      <div  slide-hover="1" className="group py-2 px-5 relative z-10 rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
        <Link to="/over-ons/" className="flex items-center gap-1 " target="_self" title="over ons">
          over ons
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className="mt-1 w-3 h-3 group-hover:rotate-180 duration-300"
          >
            <path
              d="M5.70711 4.29289L10 0C10 0 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L0 1.41421C0 1.41421 1.41422 0 1.41422 0L5.70711 4.29289Z"
              fill="white"
            ></path>
          </svg>
        </Link>
        <div className="pt-6 absolute top-full left-0 min-w-[280px] h-fit pointer-events-none group-hover:pointer-events-auto">
          <div
            
            className="bg-[#0c1b24] p-5 bg-dark rounded-[20px] -translate-y-[15%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-out flex flex-col items-start justify-start z-0"
          >
            <Link
              to="/over-ons/"
              className="inline-block py-2 px-5 w-full text-left  text-base font-medium z-20 rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out"
              slide-hover="4"
              target="_self"
              title="over ons"
            >
              over ons
            </Link>
            <Link
              to="/over-ons/werkwijze/"
              className="inline-block py-2 w-full text-left px-5 text-base font-medium z-20  rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out"
              slide-hover="4"
              target="_self"
              title="werkwijze"
            >
              werkwijze
            </Link>
            <Link
              to="/over-ons/duurzaam-ondernemen/"
              className="inline-block py-2 px-5 text-left w-full text-base font-medium z-20 rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out "
              slide-hover="4"
              target="_self"
              title="duurzaam ondernemen"
            >
              duurzaam ondernemen
            </Link>
          </div>
        </div>
      </div>

      <div  slide-hover="1" className="group py-2 px-5 relative z-10  rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
        <Link to="/work-hard-play-harder/" className="flex items-center gap-1 " target="_self" title="jobs">
          jobs
        </Link>
      </div>
      <div  slide-hover="1" className="group py-2 px-5 relative z-10 ">
        <Link to="/cases/" className="flex items-center gap-1  pointer-events-none  " target="_self" title="cases">
          cases
        </Link>
      </div>
      <div  slide-hover="1" className="group py-2 px-5 relative z-10  ">
        <Link to="/blogs/" className="flex items-center gap-1  pointer-events-none" target="_self" title="blogs">
          blogs
        </Link>
      </div>
      <div slide-hover="1" className="group py-2 px-5 relative z-10  rounded-[24px] hover:bg-[#738e9c5c] hover:text-white transition-colors duration-200 ease-in-out">
        <Link to="/contact/" className="flex items-center gap-1 " target="_self" title="contact">
          contact
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
