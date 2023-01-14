import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router";
import AboutPage from "pages/about/AboutPage"
import MainPage from "./pages/main/MainPage";

function App() {
  const navigate = useNavigate();

    useEffect(() => {
        navigate('/main')
    }, [])
  return (
      <Routes>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
  );
}

export default App;
