import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Ponuda} from './components/pages/Ponuda';
import {Kontakt} from './components/pages/Kontakt';
import {Prijava} from './components/pages/Kontakt';
import './App.css';

function App()
{
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kontakt' component={Kontakt} />
          <Route path='/ponuda' component={Ponuda} />
          <Route path='/prijava' component={Prijava} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
