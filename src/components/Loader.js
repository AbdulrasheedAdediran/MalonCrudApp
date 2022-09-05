import { useContext } from 'react'
import { ThemeContext } from "../utils/contexts/ThemeContext"

const Loader = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`loader ${theme}`}>
            <h1 >LOADING...</h1>
        </div>
    )
}

export default Loader