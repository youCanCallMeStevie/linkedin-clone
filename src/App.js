import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Profile from "./Components/Profile";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
