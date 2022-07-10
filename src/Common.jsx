import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
      <>
      <section id="header" className="d-flex">
         <div className="container-fluid">
            <div className="row">
             <div className="col-10 mx-auto">
              <div className="row margin-top">

              
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name}</h1>
                  <h5 className="my-3">
                  {props.description}
                  </h5>
                  <div className="my-3">
                   <NavLink to={props.visit} className="btn btn-outline-primary"  >
                    {props.btname}
                    </NavLink>
                  </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                 <img src={props.imgsrc} 
                 className="img-fluid animated" 
                 alt="home img" />
              </div>
              </div>
             </div>
            </div>
         </div>
      </section>
      </>
    );
  }
  
  export default Common;
  