import './App.css';

import {Home} from './components/layout/Home';
import { Series } from './components/layout/Series';
import { Movies } from './components/layout/Movies';
import { ContactUs } from './components/layout/ContactUs';
import { Login } from './components/layout/Login';
import { Summary } from './components/layout/Summary';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/Series' component={Series}/>
      <Route path='/Movies'component={Movies}/>
      <Route path='/Contact' component={ContactUs}/> 
      <Route path='/Login' component={Login}/>
      <Route path='/Summary' component={Summary}/>  
    </Router>
    
  );
}

