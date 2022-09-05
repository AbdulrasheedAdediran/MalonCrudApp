import { useState, createContext, useLayoutEffect } from "react"


export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [preferredTheme, setPreferredTheme] = useState(prefersLight)
    const theme = preferredTheme ? " " : "dark"


    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme === "light") {
            setPreferredTheme(true)
        } else {
            setPreferredTheme(false)
        }
    }, [])
    
    const toggleTheme = () => {
        setPreferredTheme(!preferredTheme)
        localStorage.setItem("theme", preferredTheme === false ? "light" : "dark")
    };

    return (
        <ThemeContext.Provider value={{ preferredTheme, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider