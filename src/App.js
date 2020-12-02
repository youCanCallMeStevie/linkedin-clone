import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./Components/Profile";
import NavBar from "./Components/Navbar";
import Footerr from "./Components/Footerr";
import { Route, Redirect } from "react-router-dom";
import Feeds from "./Components/Feeds";
import Dashboard from './Components/Dashboard'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="margin-80">
        <Route exact path="/">
          <Redirect to="profile/me" />
        </Route>

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
