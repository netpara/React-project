
import './App.css';

function App() {
  const classes = [
    {name : "html", finished : true},
    {name : "javascript", finished : false},
    {name : "css", finished : true},
    {name : "bootstrap", finished : true},
    {name : "react", finished : false},
  ];

  return (
    <div className="App">
      {classes.map((cls, index)=>{
        return(
          cls.finished && <h2 key={index}>{cls.name}</h2>
        )
      })}
    </div>
  )

}


export default App;

