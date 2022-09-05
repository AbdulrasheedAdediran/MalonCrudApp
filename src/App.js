import { Suspense } from "react"
import ThemeContextProvider from "./utils/contexts/ThemeContext";
import PostContextProvider from "./utils/contexts/PostContext";
import Layout from "./components/Layout";
import Loader from "./components/Loader";


function App() {
    return (
        <PostContextProvider>
            <ThemeContextProvider>
                <Suspense fallback={<Loader />}>
                    <Layout />
                </Suspense>
            </ThemeContextProvider>
        </PostContextProvider>

    );
}

export default App;
