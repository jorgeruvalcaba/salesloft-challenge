import React from "react";

import { FETCH_URL } from "./constants";
import { getFrecuencyChars, getDuplicatedEmails } from "./utils";
import useFetch from "./hooks/useFetch";
import People from "./components/People";
import Frecuency from "./components/Frecuency";
import Duplicates from "./components/Duplicates";
import "./App.css";

function App() {
  const [people, error] = useFetch(FETCH_URL);
  const [showCount, setShowCount] = React.useState(false);
  const [showDuplicates, setShowDuplicates] = React.useState(false);
  const charList = getFrecuencyChars(people?.data);
  const emails = getDuplicatedEmails(people?.data);

  const handleCount = () => setShowCount(!showCount);
  const handleDuplicates = () => setShowDuplicates(!showDuplicates);

  return (
    <div className="container mx-auto flex flex-col items-center p-6 bg-gray-200 mt-12 mb-12 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="mb-5 text-2xl text-blue-700 leading-normal">
          Salesloft Challenge
        </h1>
      </div>
      <div className="w-4/5 flex items-center justify-evenly">
        <button
          className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCount}
        >
          Frequency Count
        </button>
        <button
          className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDuplicates}
        >
          Duplicates
        </button>
      </div>
      <div className="mb-8">
        <People people={people} error={error} />
        {showCount && <Frecuency chars={charList} />}
        {showDuplicates && <Duplicates emails={emails} />}
      </div>
    </div>
  );
}

export default App;
