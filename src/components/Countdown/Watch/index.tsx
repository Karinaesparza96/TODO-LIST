import './style.scss';

interface Props {
    time: number | undefined
}
const Watch = ({ time = 0 }: Props) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minDezena, minUnidade] = String(minutes).padStart(2, '0')
    const [secDezena, secUnidade] = String(seconds).padStart(2,'0')
    return ( 
        <div>
            <span className='relogioNumero'>{minDezena}</span>
            <span className='relogioNumero'>{minUnidade}</span>
            <span className='relogioDivisao'>:</span>
            <span className='relogioNumero'>{secDezena}</span>
            <span className='relogioNumero'>{secUnidade}</span>
        </div>
     );
}
 
export default Watch;