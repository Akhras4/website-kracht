import React from "react";
interface buttonsProps {
    backwardSection: () => void;
  forwardSection: () => void;

}

const Buttons:React.FC<buttonsProps>=({
    backwardSection,
    forwardSection 
})=>{
    return (
        <>
        <div className="flex bg-nav sw-prev absolute top-0 right-0 z-[9999] rounded-full h-fit w-fit">
         <div className="bg-inherit sw-prev rounded-full p-6 interactiveCursor rounded-bl-image " role="button" aria-label="Previous slide" onClick={backwardSection} >
                            <svg width="8px" height="12px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L1 6l6 6" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>backwardSection
                            </svg>
                        </div>
                        <div className="flex-col " >
                           <hr className="bg-black h-full border-solid border-px border-lime-950" />
                        </div>
                        <div className="bg-inherit sw-next rounded-full p-6 interactiveCursor rounded-tr-image  " role="button" aria-label="Next slide" onClick={forwardSection} >
                            <svg width="8px" height="12px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0l6 6-6 6" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
            </div>
            </div>
        </>
    )
}
export default Buttons;