
import { ITask } from "../../types/task";
import { AddTaskList } from "./AddTaskList";
import './style.scss'

interface Props {
    tasks: ITask[],
    handleSelectTask: (task: ITask) => void

}
export const TaskList = ({ tasks, handleSelectTask}: Props) => {
    return (
        <>{
        tasks.length > 0 && (
            
                <aside className="listaTarefas">
                    <h2>Minhas Tarefas</h2>
                    <ul>{tasks.map((task) => (
                        <AddTaskList
                            handleSelectTask={handleSelectTask}
                            {...task}
                            key={task.id} />
                    ))}
                    </ul>
                </aside>
           
            )}
        </>


    )
}