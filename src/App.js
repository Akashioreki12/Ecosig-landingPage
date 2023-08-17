import React ,{ useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import OurStory from "./component/OurStory";
import EchoSign from "./component/EchoSign";
import Video from "./component/Video";
import Download from "./component/Download";
import NewsLetter from "./component/NewsLetter";
import Footer from "./component/footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar  darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode}/>
      <Hero className='h-screen' darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode}/>
      <AboutUs />
      <OurStory/>
      <EchoSign/>
      <Video/>
      <Download/>
      <NewsLetter/>
      <Footer darkMode={darkMode}/>
      
    </div>
  );
}

export default App;
