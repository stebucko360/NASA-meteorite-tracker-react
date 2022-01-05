import react from "react";
import { useState } from "react"
import { Headers } from "./components/Headers";
import { Searchbar } from "./components/Searchbar";
import { Results } from "./components/Results";
import  "./App.css"

function App() {

  const [query, setQuery] = useState("");
  
  return (
    <div>
      <Headers />
      <div className='mainBox'>
      <Searchbar setQuery={setQuery} />
      <Results className='mapBox' query={query} />
      </div>
    </div>
  );
};

export default App;
