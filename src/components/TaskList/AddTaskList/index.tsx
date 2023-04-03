
import { ITask } from '../../../types/task';
import '../../TaskList/style.scss';

interface Props extends ITask {
    handleSelectTask: (task: ITask) => void
}
export const AddTaskList = ({ 
    task, time, selected, completed, id, 
    handleSelectTask}: Props) => {
    return (
        <>
        <li
            className={`item ${selected ? 'itemSelecionado' : ''} ${completed ? 'itemCompletado': ''}`}
            key={id}
            onClick={() => { !completed && handleSelectTask({ task, time, selected, completed, id }) }}>
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
                {completed && <span className='concluido'></span>}

        </li>
        </>
    )
}