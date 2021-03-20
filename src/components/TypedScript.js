import React, { Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import "../App.css"


 const TypedScript = () => {
     return (
       <div className="typescript">
         <Typed
          
           strings={[
             " Front End Development..",
             " Back End Development..",
             " Web Design.....",
             " Programming..... ",
           ]}
           typeSpeed={40}
           backSpeed={50}
           attr="placeholder"
           loop
         >
           <input type="text" />
         </Typed>
       </div>
     );
}
export default TypedScript