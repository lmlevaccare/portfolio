import React from 'react'
import "../App.css"
import TypedScript from "./TypedScript"

 const HpageLogo = () => {
   var style = {
     color: "white",
     fontStyle: "italic",
     textShadow: "3px 3px 3px violet",
   };
    return (
      <div className="portfoliologo">
        <h1 style={style}>
          Lets Create Together
          {/* "First solve the problem. <br></br>Then, write the code" */}
        </h1>
        <h1 style={style}>“Imagination rules the world”</h1>

        <br />
        <TypedScript />
      </div>
    );
}
export default HpageLogo

    
      