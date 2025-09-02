import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TaskBoard from "./task/TaskBoard";

const App = () => {
  return (
    <>
      <div>
        <Header />

        <TaskBoard />
        <Footer />
      </div>
    </>
  );
};

export default App;

//react icons install - npm install react-icons //yarn add react-icons
