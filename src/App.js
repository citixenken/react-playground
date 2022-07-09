import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import data from "./data";

function App() {
  const visitedSite = data.map((landmark) => <MainContent {...landmark} />);
  return (
    <>
      <Navbar />
      {visitedSite}
    </>
  );
}

export default App;
