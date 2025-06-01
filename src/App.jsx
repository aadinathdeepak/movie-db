import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h1>
            Discover <span className="text-gradient">Movies</span> <br />
            Like Never Before
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
      </div>
    </main>
  );
};

export default App;
