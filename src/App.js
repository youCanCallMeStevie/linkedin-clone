import './App.css';
import PeopleSideCards from "./Components/PeopleSideCards"

import ExperienceEducation from "./Components/ExperienceEducation"

import Profile from './Components/Profile';
import NavBar from "./Components/Navbar";


function App() {
  return (
    <div className="App">

      <PeopleSideCards/>


      <ExperienceEducation/>

      <Profile/>
      <NavBar />

    </div>
  );
}

export default App;
