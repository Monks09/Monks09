import './App.css';
import Navbar from './Navbar/Navbar';
import UserProfile from './UserProfile/UserProfile';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import Skills from './Skills/Skills';

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
