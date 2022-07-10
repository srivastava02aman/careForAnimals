import React from "react";
import Common from "./Common";
import webimg from "./img/dogs.jpg" 

function Home() {
    return (
      <>
      <Common
      name="Help us to save more animals"
      description ="Our mission is to help stray dogs and animals, feed them , and provide medical care."
      imgsrc={webimg}
      visit="/Contact"
      btname="Donate"
      />
      </>
    );
  }
  
  export default Home;
  