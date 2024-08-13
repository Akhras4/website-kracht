import React from "react"
// import img from '../../assets/main.jpg'
import  './main.css'



const Main: React.FC = () => {
  return (
    <main id="main" className="mt-16 flex justify-end gap-10 pt-14 ">
      <div id="left" className="z-50 w-6/12 h-6/12 ">
        <div id="titel" className="relative visibleContent animate-title  pointer-events-auto z-515">
          <h1 className=" text-white leading-h1 ">
            discover 
            <span className="text-home-hero-h1 leading-h1 fluid ml-5">your</span>
            <br />
            digital
            <br />
            happiness
          </h1>
        </div>
        <div className="visibleContent relative animate-description mt-5 col-start-2 col-span-4 pointer-events-auto">
          <div className="mt-2 text-white leading-p">
            <p dir="ltr" className="">
              Kwalitatieve leads genereren, je producten online aan de man
              brengen, succesvol medewerkers aantrekken, bedrijfsprocessen
              optimaliseren of je online aanwezigheid nog sterker, beter maken?
            </p>
            <p dir="ltr" className="">
              <br />
            </p>
            <p dir="ltr" className="">
              Wat je doel ook is, wij hebben de kennis, de ervaring en het team
              om jou vooruit te helpen.
              <br />
            </p>
          </div>
        </div>
        <div className="visibleContent relative animate-cta mt-2 col-start-2 col-span-3 pointer-events-auto"
       >
          <div className="mt-5"
          >
            <a
              href="/over-ons/werkwijze/"
              className="nuxt-link-prefetched"
              title="Ontdek onze werkwijze"
            >
              <button className="cursorPlus group !text-white py-4 px-10 rounded-full overflow-hidden w-full lg:w-auto" style={{backgroundColor:'#dc1f5b'}}>
                <div className="overflow-hidden">
                  <div className="flex flex-col h-auto lg:group-hover:-translate-y-8 transition duration-500 ease-in-out  ">
                    <span className="whitespace-nowrap pt-2 ">
                      ontdek onze werkwijze
                    </span>
                    <span className="left-0 bottom-0 m-auto translate-y-4 text-center w-full whitespace-nowrap">
                      ontdek onze werkwijze
                    </span>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        id="right"
        className=""
      >
        <div className="">
          <picture>
            <source
              data-sizes="100vw"
              type="image/webp"
            />
            <img
              src="https://d30yna6yll9wpi.cloudfront.net/niice/Brandshoot-2024/_1000x1000_crop_center-center_100_none/Niice-brandshoot-87.jpeg"
              title="jrach brandshoot 87"
              alt="kract brandshoot 87"
              className="w-full h-full object-cover rounded-full"
            />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default Main;
