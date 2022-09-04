import { useContext } from "react"
import { PostContext } from "../utils/contexts/PostContext"
import { ThemeContext } from "../utils/contexts/ThemeContext"
import Post from "./Post"

const Main = () => {
    const { posts, loading } = useContext(PostContext)
    const { theme } = useContext(ThemeContext)

    return (
        <main className={`main ${theme}`}>
            {loading && <p>Loading...</p>}
            {!loading &&
                <ul className="posts">
                    {posts.map((post, index) => <Post key={index} post={post} />)}
                </ul>
            }
        </main>
    )
}

export default Main