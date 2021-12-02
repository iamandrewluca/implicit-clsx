import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={["App", "App1", { "App2": true }]}>
      <header className={{ "App-header": true, "App-header2": false }}>
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
