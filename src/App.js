
import './App.css';
import { useState } from 'react';

function App() {

  const [age , setAge] = useState(20);



  return <div className="App">
    <h1>{age}</h1>
    <button onClick={() => setAge(age + 1)}>increase age</button>
    <button onClick={() => setAge(age - 1)}>decrease age</button>
    <button onClick={() => setAge(0)}>ziro</button>
  </div>

}

// function App() {
//   const classes = [
//     {name : "html", finished : true},
//     {name : "javascript", finished : false},
//     {name : "css", finished : true},
//     {name : "bootstrap", finished : true},
//     {name : "react", finished : false},
//   ];

//   return (
//     <div className="App">
//       {classes.map((cls, index)=>{
//         return(
//           cls.finished && <h2 key={index}>{cls.name}</h2>
//         )
//       })}
//     </div>
//   )

// }


export default App;

