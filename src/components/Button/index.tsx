
import './style.scss'

interface IButton {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}
export const Button = ({ children, type, onClick }: IButton) => {

    return(
        <button type={type} onClick={onClick}
        className="botao">
            {children}
        </button>
    )
}