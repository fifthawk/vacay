import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css';
import Header from "./Components/Header/Header.js";
import Weather from "./Components/Weather/Weather.js";
import Things from "./Components/Things/Things.js";
import Beaches from "./Components/Beaches/Beaches.js";
import Town from "./Components/Town/Town.js";
import Food from "./Components/Food/Food.js";

function App() {
  return (
    <div>
      <Header />
   <Router>
    <div className = 'bodyContainer'>
      <nav>
        <ul>
          <li>
            <Link to= "/">Home</Link>
          </li>
          

          <li>
            <Link to= "/food">Food</Link>
          </li>
          

          <li>
            <Link to= "/beaches">Beaches</Link>
          </li>
          

          <li>
            <Link to= "/town">Town</Link>
          </li>
          

          <li>
            <Link to= "/things">Things to Do</Link>
          </li>


        </ul>
      </nav>
      <Switch>
        <Route path ="/">
          <Weather />
          
        </Route>

        <Route path = "/food">
          <Food />
        </Route>

        <Route path = "/beaches">
          <Beaches />
        </Route>


        <Route path = "/town">
          <Town />
        </Route>

        <Route path = "/things">
          <Things />
        </Route>

      </Switch>
      
    </div>
   </Router>
   
   </div>
  );
}

export default App;
