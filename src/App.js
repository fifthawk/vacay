import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header.js";
import Weather from "./Components/Weather/Weather.js";
import Things from "./Components/Things/Things.js";
import Beaches from "./Components/Beaches/Beaches.js";
import Town from "./Components/Town/Town.js";
import Food from "./Components/Food/Food.js";

function App() {
  let test = new Date();
  return (
    <div>
      <Header />
      <p className="dateTime">{test.toLocaleDateString()}</p>
      <Router>
        <div className="bodyContainer">
          <nav>
            <ul>
              <li>
                <a a href="/">
                  Home 🏠
                </a>
              </li>

              <li>
                <Link to="/food">Food 🌮</Link>
              </li>

              <li>
                <Link to="/beaches">Beaches 🏖</Link>
              </li>

              <li>
                <Link to="/grocery">Grocery 🛒</Link>
              </li>

              <li>
                <Link to="/things">Things to Do 🤿</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/food">
              <Food />
            </Route>

            <Route path="/beaches">
              <Beaches />
            </Route>

            <Route path="/grocery">
              <Town />
            </Route>

            <Route path="/things">
              <Things />
            </Route>
          </Switch>
        </div>
      </Router>
      <h2>
        <a
          className="home"
          href="https://www.vrbo.com/3526437ha?adultsCount=6&arrival=2021-10-17&departure=2021-10-21&unitId=3515753"
        >
          Our Place
        </a>
      </h2>
      <h2>
        <a
          className="home"
          href="https://www.google.com/maps/dir/Cyril+E.+King+Airport,+Airport+Road,+Charlotte+Amalie+West,+St.+Thomas,+USVI/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/@18.3520233,-64.9610229,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8c051ba12ea1f9e3:0x94309a676dd7de7e!2m2!1d-64.9722726!2d18.3360608!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744"
        >
          Directions to the house from the airport ~22 Minutes
        </a>
      </h2>
      <h2>
        <a
          className="home"
          href="https://www.google.com/maps/dir/1222+Oceanside+Rd,+St+Thomas+00802,+USVI/Cyril+E.+King+Airport,+Airport+Road,+Charlotte+Amalie+West,+St.+Thomas,+USVI/@18.3520233,-64.9610229,14z/data=!4m13!4m12!1m5!1m1!1s0x8c051aae1ebfbf2f:0x3a7891997bf772cb!2m2!1d-64.9162487!2d18.3676744!1m5!1m1!1s0x8c051ba12ea1f9e3:0x94309a676dd7de7e!2m2!1d-64.9722726!2d18.3360608"
        >
          Directions to the Airport
        </a>
      </h2>
      <Weather />
    </div>
  );
}

export default App;
