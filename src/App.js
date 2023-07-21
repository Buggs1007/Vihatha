import './App.css';
import Home from './Homepage/Homepage.js';
import NavBar from './NavbarComponents/Navbar';
import "./NavbarComponents/Navbar.css"

function App() {
  return (
    <div className="App">
    <Home />
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
