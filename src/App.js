import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./Pages/Profile";
import NavBar from "./Components/Navbar";
import Footerr from "./Components/Footerr";
import { Route, Redirect } from "react-router-dom";
import Feeds from "./Pages/Feeds";
import Dashboard from "./Components/Dashboard";
import Connections from "./Pages/Connections";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="margin-80">
        <Route exact path="/">
          <Redirect to="/feeds" />
        </Route>
        <Route exact path="/connections" component={Connections} />
        <Route
          exact
          path="/profile/:user"
          render={(props) => <Profile {...props} />}
        />
        <Route exact path="/feeds" render={(props) => <Feeds {...props} />} />
      </div>
      <Footerr />
    </div>
  );
}

export default App;
