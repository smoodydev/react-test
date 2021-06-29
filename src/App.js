import logo from './logo.svg';
import './App.css';
import AStateessComponent from './components/AStatelessComponent';
import StateBasedComponent from './components/StateBaseComponent';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import Sidebar from './components/Sidebar';


function App() {
  return (
      
    <div className="App">
        <AStateessComponent name="Stephen" />
        <StateBasedComponent />
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Something" />
        <Sidebar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
