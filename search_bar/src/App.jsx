import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SeachResultList from './components/SeachResultList';

function App() {
const [results,setResults] = useState([]);
  return (
    <>
    <div className="App">
      <div className="serch-bar-container">
        <SearchBar setResults={setResults}/>
        <SeachResultList results={results} />
      </div>
    </div>
    </>
  )
}

export default App
