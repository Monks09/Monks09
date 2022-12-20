import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UserProfile from './Components/UserProfile/UserProfile';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserProfile/>
      <PersonalDetails/>
      <Skills/>
    </div>
  );
}

export default App;
