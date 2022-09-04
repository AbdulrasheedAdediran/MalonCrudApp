import { useState, createContext } from "react"


export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [preferredTheme, setPreferredTheme] = useState(prefersLight)
    const theme = preferredTheme ? " " : "dark"
    const toggleTheme = () => {console.log(preferredTheme); setPreferredTheme(!preferredTheme)};

    return (
        <ThemeContext.Provider value={{ preferredTheme, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider