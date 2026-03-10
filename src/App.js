import './App.css';
import {useState} from 'react';
function App() {
  const [response, setResponse] = useState();
  const [input, setInput] = useState();
  const [temperature, setTemperature] = useState(0.5);
  const [wordCount, setWordCount] = useState(200);
  async function handleTranslate(){
    const res= await fetch(`http://localhost:8000/generate?text=${input}&num_chars=${wordCount}&temperature=${temperature}`);
    const data= await res.json();
    setResponse(data.generated_text);
  }
  
  return (
    <div className="container">
      <h1 className="title">Speak, Shakespeare</h1>
      <h2>Enter a phrase to continue into Shakespearean gibbrish:</h2>
      <div className="words">
        <input type="text" placeholder="Enter your text here" className="text-input" onChange={(e)=>setInput(e.target.value)}/>
        <input type="text" placeholder="Word count to be generated" className="word-input" onChange={(e)=>setWordCount(e.target.value)}/>
      </div>
      <div className="temperature">
          <input type="range" min="0.1" max="1.0" step="0.01" defaultValue="0.5" className="slider-temp" onChange={(e)=>setTemperature(e.target.value)}/> 
          <p className="align">Temperature: {temperature}</p>
      </div>
      <br />
      <button className="button" onClick={handleTranslate}>Translate</button>
      {response && <div className="response-div">{response}</div>}
    </div>
  );
}

export default App;