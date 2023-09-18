import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './pages/AboutMe';
import Stories from './pages/Stories'

function App() {
  return (
    <div>
      <NavBar name="Coding like a mother"/>
      <div className="container">
      </div>
     
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Stories" element={<Stories />} />
      </Routes>
    </div>
    
  );
}

export default App;
