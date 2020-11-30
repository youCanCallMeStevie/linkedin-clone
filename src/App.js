
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import ExperienceEducation from "./Components/ExperienceEducation"

import Profile from './Components/Profile';
import NavBar from "./Components/Navbar";


function App() {
  return (
    <div className="App">

      <ExperienceEducation/>

      <Profile/>
      <NavBar />

    </div>
  );
}

export default App;
