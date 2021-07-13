import './App.css';
import Boxes from './components/Boxes'
import Forms from './components/Forms'
import React, { useState } from 'react';


function App() {

  const [list,setList] = useState([])


  return (
    <div className="App">
      <Forms list={list} setList={setList}/>
      <Boxes list={list}/>
    </div>
  );
}

export default App;
