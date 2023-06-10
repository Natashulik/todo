import { useState } from 'react';
import './App.css';
import Input from './Input';
import Task from './Task'
import { Routes, Route, Link } from "react-router-dom";

const App=()=> {
  const [tasks, setTasks] = useState([{id: 1, title: "shopping", completed: false, type: "private"},
  {id: 2, title: "shopping", completed: false, type: "private"},
  {id: 3, title: "more shopping", completed: false, type: "private"}]);
  const [selectedButton, setSelectedButton] = useState("all");

  return (
    <div className='App'>
      <h1 className='main-title'>To-do List for <span>girls</span></h1>
      <Routes>
        <Route path="/todo" element={<Input tasks={tasks} setTasks={setTasks} type="all" />} />
        <Route path="/private" element={<Input tasks={tasks} setTasks={setTasks} type="private" />} />
        <Route path="/job" element={<Input tasks={tasks} setTasks={setTasks} type="job" />} />
      </Routes>

      <Link className="link" to="/todo">
         <button  className={`button-all ${selectedButton === "all" ? "selected" : ""   }`}
          onClick={() => setSelectedButton("all")}> all tasks </button>  </Link>
      <Link className="link" to="/private"> 
          <button  className={`button-private ${selectedButton === "private" ? "selected" : ""   }`}
          onClick={() => setSelectedButton("private")}> private </button> </Link>
      <Link className="link" to="/job"> <button className={`button-job ${selectedButton === "job" ? "selected" : ""   }`}
          onClick={() => setSelectedButton("job")} >job</button>  </Link>

      <Routes>
            <Route path="/todo" element={ tasks.map(item => <Task key={item.id}
                   item={item} tasks={tasks} setTasks={setTasks} selectedButton={selectedButton} />)} />
            <Route path="/private"element={ tasks.filter(item=> item.type==="private").map(item => <Task key={item.id}
                   item={item} tasks={tasks} setTasks={setTasks}/>)} selectedButton={selectedButton} />
            <Route path="/job" element={ tasks.filter(item=> item.type==="job").map(item => <Task key={item.id}
                   item={item} tasks={tasks} setTasks={setTasks} />)} selectedButton={selectedButton} />
      </Routes>
    </div>
  )

}

export default App;
