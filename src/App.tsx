import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import TheRcade from './Pages/TheRcade';
import MarketPlace from './Pages/MarketPlace';
import Guilds from './Pages/Guilds';
import LeaderBoards from './Pages/LeaderBoards';
import Partners from './Pages/Partners';
import Contact from './Pages/Contact';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/thercade' element={<TheRcade />} />
        <Route path='/Marketplace' element={<MarketPlace />} />
        <Route path='/guilds' element={<Guilds />} />
        <Route path='/leaderboards' element={<LeaderBoards />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
  );
};

export default App;
