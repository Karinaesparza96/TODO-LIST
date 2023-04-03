import { Button } from "../Button";
import Watch from "./Watch";
import './style.scss';
import { convertHoursToSeconds } from "../../common/convertTime";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selectTask: ITask | undefined
    finishTask: () => ITask | void
}

const Countdown = ({ selectTask, finishTask }: Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selectTask?.time) {
            setTime(convertHoursToSeconds(String(selectTask.time)))
        }

    }, [selectTask])

    function handleClickTime(count: number = 0) {
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1);
                return handleClickTime(count - 1);
            }
            finishTask()
        }, 1000)

    }

    return (
        
        <div className="cronometro">
            
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            <div className="relogioWrapper">
                <Watch time={time} />
            </div>
        
        
            <Button onClick={() => handleClickTime(time)}>
                Iniciar
            </Button>
        

        </div>
    );
}

export default Countdown;

