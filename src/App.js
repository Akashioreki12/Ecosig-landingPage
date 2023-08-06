import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import OurStory from "./component/OurStory";
import EchoSign from "./component/EchoSign";
import Video from "./component/Video";
import Download from "./component/Download";
import NewsLetter from "./component/NewsLetter";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurStory/>
      <EchoSign/>
      <Video/>
      <Download/>
      <NewsLetter/>
      <Footer/>
      
    </div>
  );
}

export default App;
