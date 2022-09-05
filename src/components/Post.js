import { useContext } from "react"
import { PostContext } from "../utils/contexts/PostContext"
import { ThemeContext } from "../utils/contexts/ThemeContext"


const Post = ({ post }) => {
    const { theme } = useContext(ThemeContext)
    const { deletePost } = useContext(PostContext)
    return (
        <li className={`post ${theme}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </li>
    )
}

export default Post