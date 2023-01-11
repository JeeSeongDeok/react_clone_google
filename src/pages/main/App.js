import logo from 'assets/googlelogo_color_272x92dp.png';
import 'pages/main/App.css'
import React, { useState } from 'react';

function App() {
  const [textArea, setTextArea] = useState(false);
  const textAreaEnter = () => {
    setTextArea(true);
  }
  const textAreaOut = () => {
    setTextArea(false);
  }
  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          className={textArea ? "App-enter-area" : "App-area"}
          onMouseEnter={() => textAreaEnter()}
          onMouseLeave={() => textAreaOut()}
        />
      </body>
    </div>
  );
}

export default App;