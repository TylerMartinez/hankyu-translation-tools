import React, { Component} from "react";
import "./app.css";
import Splash from "./features/splash/splash.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Splash />
      </div> 
    );
  }
}

export default App;