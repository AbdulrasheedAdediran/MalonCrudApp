import { Suspense } from "react"
import ThemeContextProvider from "./utils/contexts/ThemeContext";
import PostContextProvider from "./utils/contexts/PostContext";
import Layout from "./components/Layout";


function App() {
    return (
        <PostContextProvider>
            <ThemeContextProvider>
                <Suspense fallback={<h1 style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>LOADING...</h1>}>
                  <Layout/>
                </Suspense>
            </ThemeContextProvider>
        </PostContextProvider>

    );
}

export default App;
