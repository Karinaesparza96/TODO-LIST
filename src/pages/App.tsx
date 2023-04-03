import './style.scss';
import { Form } from '../components/Form';
import { TaskList } from '../components/TaskList';
import Countdown from '../components/Countdown';
import {useState} from 'react'
import { ITask } from '../types/task';
//import {TaskContext} from '../TaskContext';

function App() {
  const [task, setTasks] = useState<ITask[] | []>([]);
  const [selectTask, setSelectTask] = useState<ITask>();

  function handleSelectTask(taskSelected: ITask){
    setSelectTask(taskSelected)
    setTasks(prevState => prevState.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function finishTask(){
    if (selectTask){
      setTasks(prevState => prevState.map(task => {
        if(task.id === selectTask.id){
          return{
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }
  
  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
      <TaskList tasks={task} handleSelectTask={handleSelectTask}/>
      <Countdown selectTask={selectTask} finishTask={finishTask}/>
    </div>
  );
}

export default App;
