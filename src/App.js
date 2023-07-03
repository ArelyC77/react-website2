import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* Switch (statements) has been replaced with Routes */}
      <Routes>
       <Route path ='/' exact /> 
      </Routes>
      </Router>
    </>
  );
}

export default App;
