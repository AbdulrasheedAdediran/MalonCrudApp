import { lazy, useContext } from 'react'
import { ThemeContext } from "../utils/contexts/ThemeContext"

const Navbar = lazy(() => import("./Navbar"))
const Header = lazy(() => import("./Header"))
const Main = lazy(() => import("./Main"))

const Layout = () => {
    const { preferredTheme } = useContext(ThemeContext)
    return (
        <main className={`app ${preferredTheme ? "" : "dark"}`}>
            <Navbar />
            <section className="header-main">
                <Header />
                <Main />
            </section>
        </main>
    )
}

export default Layout