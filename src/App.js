import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router,Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* Switch (statements) has been replaced with Routes */}
      <Routes>
        {/* All these paths have images due to App.css on */}
       <Route exact path ='/' element = {<Home/>} /> 
       <Route exact path='/services' Component={Services}/>
       <Route exact path='/products' Component={Products}/>
       <Route exact path='/sign-up' Component={SignUp}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
