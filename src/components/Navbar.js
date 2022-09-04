import { useContext } from "react"
import { ThemeContext } from "../utils/contexts/ThemeContext"
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { preferredTheme, toggleTheme } = useContext(ThemeContext)
    return (
        <nav className={preferredTheme ? " " : "dark"}>
            <h1>Malon Nuggets</h1>
            <button onClick={toggleTheme}>{preferredTheme ? <FaMoon className="react-icons"/> :  <FaSun className="react-icons" /> }</button>
        </nav>
    )
}

export default Navbar