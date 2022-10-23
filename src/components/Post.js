import { useContext } from "react"
import { PostContext } from "../utils/contexts/PostContext"
import { ThemeContext } from "../utils/contexts/ThemeContext"
import Spinner from "./Spinner"


const Post = ({ post }) => {
    const { theme } = useContext(ThemeContext)
    const { loading, deletePost } = useContext(PostContext)
    return (
        <li className={`post ${theme}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button className="delete-btn" disabled={loading} onClick={() => deletePost(post.id)}>{loading ? <Spinner/> : "Delete"}</button>
        </li>
    )
}

export default Post