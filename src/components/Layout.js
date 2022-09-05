import { lazy, useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../utils/contexts/ThemeContext"

const Navbar = lazy(() => import("./Navbar"))
const Header = lazy(() => import("./Header"))
const Main = lazy(() => import("./Main"))

const Layout = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className={`app ${theme}`}>
            <Navbar />
            <section className="header-main">
                <ToastContainer className={`toast-container ${theme}`} />
                <Header />
                <Main />
            </section>
        </main>
    )
}

export default Layout