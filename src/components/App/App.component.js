import React from "react";
import "./App.styles.scss";
import Header from "../Header/Header.component";
import BodyList from "../BodyList/BodyList.component";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <BodyList />
    </div>
  );
}

export default App;
