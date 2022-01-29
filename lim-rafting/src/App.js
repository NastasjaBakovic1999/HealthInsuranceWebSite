import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Ponuda} from './components/pages/Ponuda';
import './App.css';

function App()
{
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ponuda" element={<Ponuda />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
