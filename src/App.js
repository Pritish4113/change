import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (type, message) => {
    setalert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  function bgcolor(colorcode) {
    document.body.style.backgroundColor = colorcode;
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showalert("success", "the theme has been switched to dark mode");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("success", "the theme has been switched to light mode");
    }
  };

  return (
    <>

    {/* for using react-router we have to wrap everything in this router tag */}
    <Router>

      {/* Navbar */}
      <Navbar
        title="helloo"
        mode={mode}
        toggleMode={toggleMode}
        bgcolor={bgcolor}
      />

      {/* Alert */}
      <Alert alert={alert} />

      {/* Textform */}
      <div className="container my-4">
      <Routes>
        <Route exact path="/About" element = {<About mode = {mode}/>}></Route>
        <Route exact path="/" element = {<TextForm heading="Enter Sample Text here" />}></Route>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
