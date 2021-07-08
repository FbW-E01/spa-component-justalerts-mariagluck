import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {
  
     const color = (color) => {
        switch (color) {
            case 'blue': return 'alert-primary'; 
            case 'red': return 'alert-danger'; 
            case 'orange': return 'alert-warning'; 
            default: return 'alert-dark';
         }
       }
   
     if (!props.hide) console.log(props);
   
     return(
         !props.hide ?
             <div className={`alert ${color(props.type)}`} role="alert">
                 <h4 className="alert-heading">ALERT! Alert!</h4>
                 <p>Aww yeah, you successfully read this important alert message.</p>
                 <hr></hr>
                 <p className="mb-0">Beautiful alert.</p>
             </div>
          : "" 
     )
  
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);


