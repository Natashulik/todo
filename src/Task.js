import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Task = ({item, tasks, setTasks, selectedButton}) => {
    const [text, setText] = useState(item.title);
    const [isEdit, setIsEdit] = useState(false);
    
    const handleDelete=(id)=> { 
      const filtredArr =  tasks.filter(item=>item.id !==id);
      setTasks([...filtredArr]);
     }
   
     const handleEdit=(id, text)=> {
       const arr = tasks.map(item => item.id===id ?{...item, title: text} : item );
       setTasks([...arr]);
      }
    
    const toggle = () =>{
      if(isEdit) {
        handleEdit(item.id, text);
        setIsEdit(!isEdit);
      } else {
        setIsEdit(!isEdit);
      }  
    }

    function todoCompleted(id) {
      const updatedTasks = tasks.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
      setTasks(updatedTasks);
    }

    return (
        <div className="task-wrap">
          <input type="checkbox" className='checkbox' onClick={()=>todoCompleted(item.id)}
               checked={item.completed? true: false}/>
          {isEdit ? <input  onChange={event => setText(event.target.value)} value={text}
               className={item.completed? "input-task-title decor" : "input-task-title"} /> : 
               <p className={item.completed? "task-title decor" : "task-title"}>{item.title}</p>}
          <button onClick={()=> toggle()} className="button-edit"> {isEdit? "✔" : "✎"} </button>
          <button onClick={()=> handleDelete(item.id)} className="button-close" >✖</button>
        </div>
    )
}

export default Task;