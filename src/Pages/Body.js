import NavBar from "./Components/NavBar";
import Home from "./Home";
import "./Styles/Body.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

export default function Body() {
  return (
    <div className="body">
      {/* <Router> */}
        {/* <Redirect to="/Home"></Redirect> */}
        <NavBar />
        {/* <Switch>
          <Route exact path="/Home"> */}
            <Home />
          {/* </Route>
        </Switch>
      </Router> */}
    </div>
  );
}
