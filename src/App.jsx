import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import Authentication from "./components/Authentication";
import Endpoints from "./components/Endpoints";
import Tutorials from "./components/Tutorials";
import Program from "./components/Program";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="flex flex-col items-center min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-8">
          <Overview />
          <Authentication />
          <Endpoints />
          <Tutorials />
          <Program />
          <Pricing />
        </div>
      </div>
    </div>
  );
}

export default App;
