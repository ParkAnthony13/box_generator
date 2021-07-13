import './App.css';
import Boxes from './components/Boxes'
import Forms from './components/Forms'

function App() {

  const lists = []

  return (
    <div className="App">
      <Forms addlist={lists}/>
      <Boxes boxList={lists}/>
    </div>
  );
}

export default App;
