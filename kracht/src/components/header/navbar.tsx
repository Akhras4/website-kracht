import React, { useRef, useEffect } from "react";
import './nav.css';

const Navbar: React.FC = () => {
 

  return (
    <div className="hidden lg:flex items-center p-3 bg-dark rounded-[56px] pointer-events-auto" style={{ backgroundColor: '#0c1c25' }}>
      <div

        className="fixed py-2 px-5 bg-[#1C313D] rounded-full duration-200 ease-in-out z-0 "
        style={{ opacity: 0 }}
      ></div>

      <div  slide-hover="1" className="group py-2 px-5 relative z-10 ">
        <a
          href="/diensten/social-content/"
          aria-current="page"
          className="flex items-center gap-1 nuxt-link-exact-active nuxt-link-active nuxt-link-prefetched"
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
        </a>
         {/* New Content Triggered by Hover */}
         <div  slide-hover="1" className="absolute top-full left-0 lg:block container px-12 pt-3 pointer-events-none -z-40  group-hover:translate-y-0 group-hover:opacity-100 duration-200">
          <div className="px-20 py-12 bg-dark rounded-[20px] grid grid-cols-12 duration-300 ease-out -translate-y-[15%] opacity-0 pointer-events-none">
            <div className="col-start-1 col-span-3">
              <div>
                <a href="/thema/" className="nuxt-link-prefetched">
                  <h4 className="text-[28px] font-bold">Uitdagingen</h4>
                </a>
              </div>
              <div className="mt-4 -ml-6 flex flex-col items-start ">
                <div
                slide-hover="1"
                  slide-hover-background="2"
                  className="fixed py-4 px-6 bg-[#1C313D] rounded-full duration-200 ease-in-out z-0"
                  style={{
                    opacity: 0,
                    left: '97.5px',
                    top: '359.938px',
                    height: '56.25px',
                    width: '212.172px',
                  }}
                ></div>
                <a href="/thema/digitale-transformatie/" className="z-10 py-4 px-6 rounded-full text-base font-medium nuxt-link-prefetched" slide-hover="2">
                  Digitale transformatie
                </a>
                <a href="/thema/e-commerce/" className="z-10 py-4 px-6 rounded-full text-base font-medium nuxt-link-prefetched" slide-hover="2">
                  E-commerce
                </a>
                <a href="/thema/demand-leadgeneration/" className="z-10 py-4 px-6 rounded-full text-base font-medium nuxt-link-prefetched" slide-hover="2">
                  Demand &amp; lead generation
                </a>
                <a href="/thema/recruitment/" className="z-10 py-4 px-6 rounded-full text-base font-medium nuxt-link-prefetched" slide-hover="2">
                  Recruitment marketing
                </a>
              </div>
            </div>
            <div className="col-start-5 col-span-8">
              <div>
                <a href="/diensten/" className="nuxt-link-prefetched">
                  <h4 className="text-[28px] font-bold">Oplossingen</h4>
                </a>
              </div>
              <div className="mt-2 -ml-6 grid grid-cols-2">
                <div
                  slide-hover-background="3"
                  className="fixed p-6 bg-[#1C313D] rounded-[24px] duration-200 ease-in-out z-0"
                  style={{
                    opacity: 0,
                    left: '467.156px',
                    top: '344.938px',
                    height: '161.25px',
                    width: '380.922px',
                  }}
                ></div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]">
                  <a href="/diensten/digital-business-strategy/" className="nuxt-link-prefetched">
                    <h6 className="mb-3 text-base font-bold">digital business strategy</h6>
                    <p>
                      Business development, Strategie, innovatie, digitale transformatie, digitale infrastructuur, content strategie
                    </p>
                  </a>
                </div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]">
                  <a href="/diensten/design-en-technology/" className="nuxt-link-prefetched">
                    <h6 className="mb-3 text-base font-bold">design &amp; technology</h6>
                    <p>
                      Applicaties, portals, configuratoren, e-commerce, corporate sites, recruitment sites, AI &amp; machine learning
                    </p>
                  </a>
                </div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]">
                  <a href="/diensten/digital-marketing/" className="nuxt-link-prefetched">
                    <h6 className="mb-3 text-base font-bold">digital marketing</h6>
                    <p>
                      Growth hacking, data &amp; automation, Google Ads, Social ads, SEO, CRO, e-mailmarketing, marketplaces
                    </p>
                  </a>
                </div>
                <div slide-hover="3" className="z-10 p-6 rounded-[24px]">
                  <a href="/diensten/social-content/" className="nuxt-link-prefetched">
                    <h6 className="mb-3 text-base font-bold">social content</h6>
                    <p>Snackable content, TikTok ads, TikTok strategie, podcast</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </div>


      <div  slide-hover="1" className="group py-2 px-5 relative z-10">
        <a href="/over-ons/" className="flex items-center gap-1 nuxt-link-prefetched" target="_self" title="over ons">
          over ons
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
        </a>
        <div className="pt-6 absolute top-full left-0 min-w-[280px] h-fit pointer-events-none group-hover:pointer-events-auto">
          <div
            
            className="bg-[#1C313D] p-5 bg-dark rounded-[20px] -translate-y-[15%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-out flex flex-col items-start justify-start z-0"
          >
            <a
              href="/over-ons/"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="over ons"
            >
              over ons
            </a>
            <a
              href="/over-ons/werkwijze/"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="werkwijze"
            >
              werkwijze
            </a>
            <a
              href="/over-ons/duurzaam-ondernemen/"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="duurzaam ondernemen"
            >
              duurzaam ondernemen
            </a>
          </div>
        </div>
      </div>

      <div  slide-hover="1" className="group py-2 px-5 relative z-10">
        <a href="/work-hard-play-harder/" className="flex items-center gap-1 nuxt-link-prefetched" target="_self" title="jobs">
          jobs
        </a>
      </div>
      <div  slide-hover="1" className="group py-2 px-5 relative z-10">
        <a href="/cases/" className="flex items-center gap-1 nuxt-link-prefetched" target="_self" title="cases">
          cases
        </a>
      </div>
      <div  slide-hover="1" className="group py-2 px-5 relative z-10">
        <a href="/blogs/" className="flex items-center gap-1 nuxt-link-prefetched" target="_self" title="blogs">
          blogs
        </a>
      </div>
      <div slide-hover="1" className="group py-2 px-5 relative z-10">
        <a href="/contact/" className="flex items-center gap-1 nuxt-link-prefetched" target="_self" title="contact">
          contact
        </a>
      </div>
      
    </div>
  );
};

export default Navbar;
