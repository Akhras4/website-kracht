import React from "react";
import './nav.css'

const Navbar:React.FC= () => {
  return (
    <div className="hidden lg:flex items-center p-3 bg-dark rounded-[56px] pointer-events-auto"
    style={{
        backgroundColor: '#0c1c25',
      }}>
      <div
        slide-hover-background="1"
        className="fixed py-2 px-5 bg-[#1C313D] rounded-full duration-200 ease-in-out z-0"
        style={{ opacity: 0, left: "858.203px", top: "35.25px", height: "41.25px", width: "113.844px" }}
      >
      </div>
      <div slide-hover="1"  className=" group py-2 px-5 relative z-10">
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
              d="M5.70711 4.29289L10 1.68643e-08C10 1.68642e-08 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L1.92421e-06 1.41421C1.92421e-06 1.41421 1.41422 1.19249e-07 1.41422 1.19249e-07L5.70711 4.29289Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <div className=" pt-6 absolute top-full right-1/3 w-fit min-w-[680px] h-fit pointer-events-none group-hover:pointer-events-auto">
          <div className=" flex-row bg-[#1C313D] p-5 bg-dark rounded-[20px] -translate-y-[15%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-out flex items-start justify-start z-0">
            <div className="flex  flex-col gap-2" >
            <h1 className="">Uitdagingen</h1>
            <a
              href="/thema/digitale-transformatie"
              className="self-end w-full h-full  z-20"
              slide-hover="4"
              target="_self"
              title="Digitale transformatie"
            >
              Digitale transformatie
            </a>
            <a
              href="/thema/e-commerce"
              className="w-full h-full self-start  text-base font-medium z-20 "
              slide-hover="4"
              target="_self"
              title="E-commerce"
            >
              E-commerce
            </a>
            <a
              href="/thema/demand-leadgeneration"
              className="w-full h-full   rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="Demand & lead generation"
            >
              Demand & lead generation
            </a>
            <a
              href="/thema/recruitment'"
              className="w-full h-full rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="Recruitment marketing"
            >
              Recruitment marketing
            </a>
            </div>
         <div  className="flex-col w-1/3 ">
            <h1 className="">Oplossingen</h1>
            <a
              href="/diensten/digital-business-strategy"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="digital business strategy"
            >
              digital business strategy
              Business development, Strategie, innovatie, digitale transformatie, digitale infrastructuur, content strategie  
            </a>
            <a
              href="/diensten/design-en-technology/"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="design & technology"
            >
              design & technology
              Applicaties, portals, configuratoren, e-commerce, corporate sites, recruitment sites, AI & machine learning
            </a>
            <div  className="flex-col w-1/3 gap-2 ">
            <a
              href="/diensten/digital-marketing/"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="digital marketing"
            >
              digital marketing
              Growth hacking, data & automation, Google Ads, Social ads, SEO, CRO, e-mailmarketing, marketplaces
            </a>
            <a
              href="/thema/recruitment'"
              className="inline-block py-2 px-5 rounded-full text-base font-medium z-20 nuxt-link-prefetched"
              slide-hover="4"
              target="_self"
              title="Recruitment marketing"
            >
              Recruitment marketing
            </a>
            </div>
            </div>
        </div>
      </div>
      </div>
      <div slide-hover="1" className="group py-2 px-5 relative z-10">
        <a
          href="/over-ons/"
          className="flex items-center gap-1 nuxt-link-prefetched "
          target="_self"
          title="over ons"
        >
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
              d="M5.70711 4.29289L10 1.68643e-08C10 1.68642e-08 11.4142 1.41421 11.4142 1.41421L6.41422 6.41421C6.21785 6.61058 5.70711 7.13591 5.70711 7.13591C5.70711 7.13591 5.19416 6.60838 5 6.41421L1.92421e-06 1.41421C1.92421e-06 1.41421 1.41422 1.19249e-07 1.41422 1.19249e-07L5.70711 4.29289Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <div className=" pt-6 absolute top-full left-0 min-w-[280px] h-fit pointer-events-none group-hover:pointer-events-auto">
          <div className=" bg-[#1C313D] p-5 bg-dark rounded-[20px] -translate-y-[15%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-out flex flex-col items-start justify-start z-0">
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
          <div
            slide-hover-background="4"
            className="fixed py-2 px-5 bg-white/10 rounded-full duration-200 ease-in-out z-10 pointer-events-none"
            style={{ opacity: 0 }}
          ></div>
        </div>
      </div>
      <div slide-hover="1" className="group py-2 px-5 relative z-10">
        <a
          href="/work-hard-play-harder/"
          className="flex items-center gap-1 nuxt-link-prefetched"
          target="_self"
          title="jobs"
        >
          jobs
        </a>
      </div>
      <div slide-hover="1" className="group py-2 px-5 relative z-10">
        <a href="/cases/" className="flex items-center gap-1 nuxt-link-prefetched" target="_self" title="cases">
          cases
        </a>
      </div>
      <div slide-hover="1" className="group py-2 px-5 relative z-10">
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
