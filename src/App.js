import { useState, useEffect } from 'react';
import Theme from './styles/theme';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Header, HandB, Projects, Technologies, Timeline, Contact, Footer } from "./components";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  
  const handleResize = () =>{
    setIsMobile(window.innerWidth > 640);
  }
 
  useEffect(() =>{
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  });
  return (
    <Router>
      <div className="App">
        <Theme>
        <div style={{maxWidth: '1280px', width: '100%', margin: 'auto'}}>
          <Header isMobile={isMobile}/>
          {isMobile ? 
          <Routes>
            <Route exact path='/' element={<HandB isMobile={isMobile}/>} />
            <Route exact path='/projects' element={<Projects isMobile={isMobile} />} />
            <Route exact path='/tech' element={<Technologies isMobile={isMobile} />} />
            <Route exact path='/about' element={<Timeline />} />
            <Route exact path='/footer' element={<Footer  />}/>        
          </Routes>
          : 
          <>
            <HandB />
            <Projects />
            <Technologies />
            <Timeline />
            <Footer  />
          </>
          }
        </div>
        </Theme>
      </div>
    </Router>
  );
}

export default App;


 