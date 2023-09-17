import BlogList from "./BlogList";
import useFetch from "./useFetch";
import handleDelete from "./handleDelete";

/* npx json-server --watch data/db.json --port 8000 */
/* npm start */

const Home = () => {   
    const { data: blogs, isPending, error, setData: setBlogs } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
          {isPending && <div>Loading...</div>}
          {blogs && (
            <BlogList
              blogs={blogs}
              title={<h2 className="blog-list-title">All Blogs</h2>}
              handleDelete={(id) => handleDelete(id, blogs, setBlogs)}
            />
          )}

        </div>
      );
}
 
export default Home;