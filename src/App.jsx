import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes["dashboard"]}>
      <Header/>
      <div style={{ display: 'flex' }}>
        <Sidebar  className={classes['sidebar']} />
        <Content className={classes['mainContent']}/>
      </div>
    </div>
  );
};

export default App;
