import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Profile from "./Components/Profile";
import NavBar from "./Components/Navbar";
import Footerr from './Components/Footerr'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Footerr />
    </div>
  );
}

export default App;
