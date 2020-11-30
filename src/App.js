import './App.css';

import ELearning from "./Components/ELearning"


import "bootstrap/dist/css/bootstrap.min.css";

import PeopleSideCards from "./Components/PeopleSideCards"


import ExperienceEducation from "./Components/ExperienceEducation"

import Profile from './Components/Profile';
import NavBar from "./Components/Navbar";

op

function App() {
  return (
    <div className="App">


      <ELearning />

       <Promoted/>


      <PeopleSideCards/>



      <ExperienceEducation/>

      <Profile/>
      <NavBar />


    </div>
  );
}

export default App;
