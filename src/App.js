import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import About from './Components/About';  // Assuming About is also a separate page component
import './index.css';

import AiStoryGenerator from './Pages/AiStoryGenerator';

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Homepage route */}
          <Route path="/about" element={<About />} />  {/* About page route */}
          
        </Routes>

      <div>
      
      <div>
      <Routes>
        <Route path="/AIStory" element={<AiStoryGenerator />} />
      </Routes>
    </div>

      </div>
       
      </div>
    
    </Router>

   

    
  );
}


export default App;
