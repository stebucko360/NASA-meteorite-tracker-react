import react from "react";
import { useState } from "react"
import { Headers } from "./components/Headers";
import { Searchbar } from "./components/Searchbar";
import { Results } from "./components/Results";

function App() {

  const [query, setQuery] = useState("");
  console.log(query)
  return (
    <div>
      <Headers />
      <Searchbar setQuery={setQuery} />
      <Results query={query} />
    </div>
  );
};

export default App;
