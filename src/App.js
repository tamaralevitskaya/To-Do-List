import './App.css';
import image from "./list.png";
import imagetwo from "./gym.png";
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={image} alt="gym" width="200px"/>
      </div>
      <div className='container'>
        <h1>TO DO LIST</h1>
      </div>
      <div className='container'>
        <ToDoList/>
      </div>
      <div className='container'>
        <img src={imagetwo} alt="gym" width="200px"/>
      </div>
    </div>
  );
}

export default App;
