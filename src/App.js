import Navbar from "./Components/Navbar";
import "./styles.css";
import Login from "./Components/Login";
import React from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Components/Home";

export default function App() {
  let { isAuth } = React.useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      {isAuth ? <Home /> : <Login />}
    </div>
  );
}
