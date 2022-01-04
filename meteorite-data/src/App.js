import react from "react";
import { useState } from "react"
import { Headers } from "./components/Headers";
import { Searchbar } from "./components/Searchbar";

function App() {

  const [query, setQuery] = useState("");
console.log(query)
  return (
    <div>
      <Headers/>
      <Searchbar setQuery={setQuery}/>
    </div>
  );
};

export default App;
