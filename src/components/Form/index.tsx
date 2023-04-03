import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import { ITask } from "../../types/task";
import { Button } from "../Button";
import './style.scss'


export const Form = ({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<ITask[]>> }) => {
    const [task, setNameTask] = useState('')
    const [time, setTimeTask] = useState('00:00')
    
    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTasks(prevState =>
            [...prevState,
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuid()
            }

            ])
            setNameTask('')
            setTimeTask('00:00')
    }

    return (
        <form className="novaTarefa" onSubmit={addTask}>
            <div className="inputContainer">
                <label htmlFor="ftask">Adicione a sua lista:</label>
                <input
                    type="text"
                    name="task"
                    id="ftask"
                    placeholder="Ex.: estudar react"
                    required
                    value={task}
                    onChange={(e) => { setNameTask(e.target.value) }} />
            </div>
            <div className="inputContainer">
                <label htmlFor="ftime">Selecione o tempo:</label>
                <input
                    type="time"
                    name="time"
                    id="ftime"
                    step={1}
                    required
                    value={time}
                    onChange={(e) => { setTimeTask(e.target.value) }}
                />

            </div>
            <Button type="submit">
                Adicionar
            </Button>

        </form>
    )
}

// interface Task {
//     id: string,
//     task: string,
//     time: string
// }

// const initialTasks: Task = {
//    id: 'abc',
//     task: 'Estudar alguma coisa',
//     time: '01:00:00'
// }
