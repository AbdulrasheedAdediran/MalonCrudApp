import { useState, useContext } from "react"
import { PostContext } from "../utils/contexts/PostContext"
import { ThemeContext } from "../utils/contexts/ThemeContext"

const Header = () => {
    const { addPost } = useContext(PostContext)
    const { theme } = useContext(ThemeContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const regEx = /^\s+$/
    // Checks if user input is an empty string (space)
    const invalidTitle = regEx.test(title)
    const invalidBody = regEx.test(body)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (invalidTitle || invalidBody) {
            return alert("Please enter a valid input")
        }
        addPost(title, body)
        setTitle("")
        setBody("")
    }

    return (
        <header className={`header ${theme}`}>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    type="text"
                    cols="15"
                    rows="5"
                    value={body}
                    placeholder="Your nugget for the tribe"
                    required
                    onChange={(e) => setBody(e.target.value)} />

                <input type="submit" value="Share" className="btn" />
            </form>
        </header>
    )
}

export default Header