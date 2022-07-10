import React from "react";
import Animals from "./img/animals.jpg"
import Common from "./Common";

function About() {
    return (
      <>
      <Common
      name="What we do"
      description ="Our Mission – We believe that humanity is at the core of our being. And our mission is to augment this through crowdfunding.
      To be the world’s most trusted online giving platform"
      imgsrc={Animals}
      visit="/Contact"
      btname="Contact"
      />
      </>
    );
  }
  
  export default About;
  