import { useState, createContext, useEffect } from "react"
import axios from "axios"
// import { v4 as uuidv4 } from 'uuid';

export const PostContext = createContext()
const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const baseURL = "https://jsonplaceholder.typicode.com/posts"
    const limit = "?_limit=10"

    const getPosts = async () => {
        try {
            const response = await axios.get(`${baseURL}/${limit}`)
            // const response = await axios.get(`${baseURL}`)
            return await response.data
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const data = await getPosts()
                setPosts(data)
            } catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
        fetchData();
    }, [])

    const addPost = async (title, body) => {
        // const uniqueID = uuidv4()
        try {
            const response = await axios.post(baseURL, {
                title,
                body
            })
            console.log(response.statusText)
            setPosts([response.data, ...posts])
        } catch (err) {
            if(err.response){
                console.log(err.response.status)
            } else if(err.request){
                console.log(err.request)
            } else{
                console.log(err.message)
            }
        }
    }

    const deletePost = async (id) => {
        try {
            const response = await axios.delete(`${baseURL}/${id}`)
            console.log(response.statusText)
            setPosts(posts.filter(post => post.id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <PostContext.Provider value={{ posts, loading, addPost, deletePost }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider