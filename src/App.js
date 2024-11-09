import logo from './logo.svg';
import './App.css';

import Component from './Component/component.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component/>
        <p>
        </p>
        <h2>10주차 과제 css 3개 추가하기</h2>
        <h3>3개 추가 완료</h3>
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
