import { useParams } from "react-router-dom";
import handleDelete from "./handleDelete";

import useFetch from "./useFetch";
const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            <h2>Blog Details</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button className='DeleteButton' onClick = {() => handleDelete(blog.id)}>X</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;