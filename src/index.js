import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {
  
     const color = (color) => {
          if (color === "blue") {
            return 'alert-primary';
          }
          if (color === "red") {
            return 'alert-danger';
          }
          if (color === "orange") {
            return 'alert-warning'; 
          }
     }
      
   
     if (!props.hide) console.log(props);
   
     return(
         !props.hide ?
             <div className={`alert ${color(props.type)}`} role="alert">
                 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <h1 className="alert-heading"><strong>ALERT! Alert!</strong></h1>
                 <h4>{`${props.message}`}</h4>
                 <hr></hr>
                 <p>Aww yeah, you successfully read this important alert message.</p>
             </div>
          :  <div className="d-none"></div> 
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


