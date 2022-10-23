import { useState, useContext } from "react"
import { PostContext } from "../utils/contexts/PostContext"
import { ThemeContext } from "../utils/contexts/ThemeContext"
import Post from "./Post"

const Main = () => {
    const { posts } = useContext(PostContext)
    const { theme } = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const totalPosts = posts.length
    const pageCount = Math.ceil(totalPosts / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => setCurrentPage((pageNumber) => pageNumber + 1);

    const previousPage = () =>
        setCurrentPage((pageNumber) => pageNumber - 1);

    const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
 

    return (
        <main className={`main ${theme}`}>
                <ul className="posts">
                    {currentPosts.map((post, index) => <Post key={index} post={post} />)}
                </ul>
    

            <div className='pagination'>

                <button
                    onClick={previousPage}
                    className="pagination-btn"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <ul className="pages">
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <button
                                onClick={() => paginate(number)}
                                className={`pagination-btn num-btn ${number === currentPage ? "active" : ""
                                    }`}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={nextPage}
                    disabled={currentPage === pageCount}
                    className="pagination-btn"
                >
                    Next
                </button>
            </div>
        </main>
    )
}

export default Main