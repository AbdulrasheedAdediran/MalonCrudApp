import { useState, createContext, useEffect } from "react"
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';

export const PostContext = createContext()
const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const baseURL = "https://jsonplaceholder.typicode.com/posts"
    const limit = "?_limit=10"
    const theme = localStorage.getItem("theme") || "dark"
    const toastConfig = { autoClose: 2000, theme }

    // const getPosts = async () => {
    //     try {
    //         const response = await axios.get(`${baseURL}/${limit}`)
    //         // const response = await axios.get(`${baseURL}`)
    //         return await response.data
    //     } catch (err) {
    //         toast.error(err.message, toastConfig)
    //         console.log(err)
    //     }
    // }

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        const fetchData = async () => {
            setLoading(true)
            try {
            const response = await axios.get(`${baseURL}/${limit}`, {cancelToken:cancelToken.token})
                // const data = await getPosts()
                setPosts(response.data)
            } catch (err) {
                if(axios.isCancel(err)){
                    toast.error("Request cancelled", toastConfig)
                } else {
                    toast.error(err.message, toastConfig)
                    console.log(err)
                }
            }
            setLoading(false)
            return cancelToken.cancel()
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addPost = async (title, body) => {
        // const uniqueID = uuidv4()
        try {
            const response = await axios.post(baseURL, {
                title,
                body
            })
            response.status === 201 && toast.success("Shared successfully", toastConfig)
            setPosts([response.data, ...posts])
        } catch (err) {
            if (err.response) {
                console.log(err.response.status)
            } else if (err.request) {
                console.log(err.request)
            } else {
                toast.error(err.message, toastConfig)
                console.log(err.message)
            }
        }
    }

    const deletePost = async (id) => {
        try {
            const response = await axios.delete(`${baseURL}/${id}`)
            setPosts(posts.filter(post => post.id !== id))
            response.status === 200 && toast.success("Deleted successfully", toastConfig)
        } catch (err) {
            toast.error(err.message, toastConfig)
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