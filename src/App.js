import logo from './logo.svg';
import './App.css';

function App() {
  const age = 20;

  return (
    <div className="App">
      {age >= 18 ? <h1> over </h1> : <h1> under </h1>}
      {age === 20 && <h1>20years old</h1>}
      <button type="submit" className={age >= 20 ? "success-message" : "unsuccess-message"}>Click Me!</button>
    </div>
  )


  
}
export default App;
