import { useContext, useRef, useEffect } from "react"
import { ThemeContext } from "../utils/contexts/ThemeContext"
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { preferredTheme, toggleTheme } = useContext(ThemeContext)
    const navRef = useRef();
    
    useEffect(() => {
        let lastScrollTop;
        const scrollListener = () => {
            if (typeof window !== "undefined" && window.document) {
                const scrollTop = document.scrollY || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    navRef.current.style.top = "-30%"
                } else {
                    navRef.current.style.top = "0"
                }
                lastScrollTop = scrollTop;
            }
        }
        window.addEventListener("scroll", scrollListener)

        return () => {
            window.removeEventListener("scroll", scrollListener)
        }
    }, [])

    return (
        <nav className={preferredTheme ? " " : "dark"} ref={navRef}>
            <h1>Malon Nuggets</h1>
            <button onClick={toggleTheme}>{preferredTheme ? <FaSun className="react-icons" /> : <FaMoon className="react-icons" />}</button>
        </nav>
    )
}

export default Navbar