import { useState } from "react";
import { useEffect } from "react";
import Wordle from './components/Wordle'


function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')            /* Fetch data using json-server endpoint */
    .then(res => res.json())                            /* Get response and return json */
    .then(json => {
      // random int between 0 - 14
      const randomSolution = json[Math.floor(Math.random()*json.length)]      /* Get a random number * it by length of array and round down to int, update solution from Null */
      setSolution(randomSolution.word)
    })
  }, [setSolution])         /* Dependacy array, update when Solution changes */

  return (
    <div className="App">
      <h1>Wordle </h1>

      {solution && <Wordle solution={solution} />}      {/* Only display Wordle output when a solution has been fetched */}
    </div>
  );
}

export default App
