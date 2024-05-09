import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className="flex flex-column min-h-screen justify-center items-center space-x-4">
          {counter}
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded-sm" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button className="bg-red-400 hover:bg-red-500 text-white font-mono py-2 px-4 border border-cyan-600 rounded-sm" onClick={() => setCounter(counter - 1)}>
          Dicrement
        </button>
      </div>
    </>
  );
}
