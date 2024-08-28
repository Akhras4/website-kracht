import React from "react";

const Nopage:React.FC=()=>{
    console.log("Nopage component rendered");
    return (
        <div className="flex flex-col justify-center align-middle gap-14 w-full h-full my-44">
            <h1 className="text-amber-500 font-bold text-4xl ">404</h1>
            <p className="text-center text-4xl">Sorry, the page you are looking for does not exist.</p>
            
        </div>
        );
}
export default Nopage;