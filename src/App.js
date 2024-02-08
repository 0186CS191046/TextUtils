import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = ()=> {
    document.body.classList.remove('dark');
    document.body.classList.remove('success');
    document.body.classList.remove('warning');
    document.body.classList.remove('danger');
    document.body.classList.remove('primary')
    document.body.classList.remove('light')
  }

  
  const bgColor = (cls)=> {
  removeBodyClasses()
  console.log(cls)
  document.body.classList.add('bg-'+cls)
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b0b38";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils -Dark Mode";

    
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils -Light Mode";
    }
  };

  return (
    <>
   
<Router>
      <Navbar
        title="TextUtilsUtils"
        aboutText="About Us"
        mode={mode}
        togglemode={togglemode}
        bgColor = {bgColor}
      />
      <Alert alert={alert}  />
      {/* <Navbar/> */}
      {/* <Navbar  aboutText="About Us"/> */}
      
      <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Convert Uppercase to Lowercase and vice-versa "
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About  mode={mode}/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
