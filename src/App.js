import './App.css';
import ELearning from "./Components/ELearning"

import ExperienceEducation from "./Components/ExperienceEducation"

import Profile from './Components/Profile';
import NavBar from "./Components/Navbar";


function App() {
  return (
    <div className="App">

      <ELearning />


      <ExperienceEducation/>

      <Profile/>
      <NavBar />

    </div>
  );
}

export default App;
