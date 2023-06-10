import { useState } from 'react';

const Input = ({tasks, setTasks, type}) => {
  const [text, setText] = useState('');
  const [isEmpty, setIsEmpty] = useState(false); //состояние пустого инпута

  const handleClick = ()=>{
  if(text) {
    const newTask = {id: Date.now(), title: text, completed: false, type: type};
    setTasks([...tasks, newTask]);
    setText('');
    setIsEmpty(false);
    console.log(newTask);
  }  else {
    setIsEmpty(true);
  }
  }

    return (
        <div className='new-task_block'>
        <input value={text} onChange = {event=> setText(event.target.value)} 
         placeholder={isEmpty ? 'Add task' : ''}
         className='new-task' />
        <button onClick={()=> handleClick()} className='button-add'>Add</button>
        </div>
    )
}

export default Input;