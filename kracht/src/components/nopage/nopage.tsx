import React from "react";

const Nopage:React.FC=()=>{
    console.log("Nopage component rendered");
    return (
        <div className="nopage">
            <h1>404</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            
        </div>
        );
}
export default Nopage;