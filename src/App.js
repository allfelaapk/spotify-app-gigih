import logo from "./logo.svg";
import "./App.css";

function App() {
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <p>{clientId}</p> */}
      </header>
    </div>
  );
}

export default App;
