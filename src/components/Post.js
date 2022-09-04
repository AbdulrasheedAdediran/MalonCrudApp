import { useContext } from "react"
import { PostContext } from "../utils/contexts/PostContext"


const Post = ({ post }) => {
    const { deletePost } = useContext(PostContext)
    return (
        <li className="post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => deletePost(post.id)}>Delete</button>
        </li>
    )
}

export default Post