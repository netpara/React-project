import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <MyComponent 
        name="Sample Name" 
        description="This is a sample description." 
        text="Additional text goes here." 
      />
      
      <MyComponent 
        name="Another Name" 
        description="This is another description." 
        text="More additional text." 
      />

      <MyComponent 
        name="Third Name" 
        description="This is the third description." 
        text="Even more additional text." 
      />

    </div>
  )
}


const MyComponent = (props) => {
  return(
    <div className="my-component">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <span>{props.text}</span>
    </div>
  )
}

export default App;
