import logo from "assets/googlelogo_color_272x92dp.png";
import "pages/main/App.css";
import React, { useState } from "react";
import Search from "component/Search/SearchBar";

function App() {
  const [textArea, setTextArea] = useState(false);
  const [googleInfoUnderLineState, setGoogleInfoState] = useState(false);
  const [storeUnderLineState, setStoreState] = useState(false);
  const textAreaEnter = () => {
    setTextArea(true);
  };
  const textAreaOut = () => {
    setTextArea(false);
  };
  const googleInfoEnter = () => {
    setGoogleInfoState(true);
  };
  const googleInfoOut = () => {
    setGoogleInfoState(false);
  };
  const storeInfoEnter = () => {
    setStoreState(true);
  };
  const storeInfoOut = () => {
    setStoreState(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <span
          className={
            googleInfoUnderLineState ? "App-span-enter" : "App-span-out"
          }
          onMouseEnter={() => googleInfoEnter()}
          onMouseOut={() => googleInfoOut()}
        >
          Google 정보
        </span>
        <span
          className={storeUnderLineState ? "App-span-enter" : "App-span-out"}
          onMouseEnter={() => storeInfoEnter()}
          onMouseOut={() => storeInfoOut()}
        >
          스토어
        </span>
      </header>
      <body className="App-body">
        <div id="blank" />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <Search />
        </div>
      </body>
    </div>
  );
}

export default App;
