import logo from "assets/googlelogo_color_272x92dp.png";
import "pages/main/MainPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "component/Search/SearchBar";

function MainPage() {
    const [googleInfoUnderLineState, setGoogleInfoState] = useState(false);
    const [storeUnderLineState, setStoreState] = useState(false);
    const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
          <span
            className={
              googleInfoUnderLineState ? "App-span-enter" : "App-span-out"
            }
            onMouseEnter={() => setGoogleInfoState(true)}
            onMouseOut={() => setGoogleInfoState(false)}
            onClick={() => navigate('/about')}
          >
            Google 정보
          </span>
          <span
            className={storeUnderLineState ? "App-span-enter" : "App-span-out"}
            onMouseEnter={() => setStoreState(true)}
            onMouseOut={() => setStoreState(false)}
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
            <SearchBar />
          </div>
        </body>
      </div>
    );
  }
  
  export default MainPage