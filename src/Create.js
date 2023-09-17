import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false); // [1]
    const [isSuccess, setIsSuccess] = useState(false); // Track success
    const [isError, setIsError] = useState(false); // Track error
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true); // Set to true when submitting

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            setIsSuccess(true); // Set to true on success
            //history.go(-1); // Go back to previous page (home page)
            history.push('/'); // Go back to home page
        })
        .catch(() => {
            setIsPending(false);
            setIsError(true); // Set to true on error
        });
    }


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input type="text" required onChange={e => setTitle(e.target.value)}></input>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending &&(
                    <button onClick={(e) => handleSubmit(e)}>Add Blog</button>
                )}
                {isPending && (
                    <button disabled onClick={(e) => handleSubmit(e)}>Adding the blog...</button>
                )}
            </form>
            {isError && (
                <p className="error-message">A problem has occurred!</p>
            )}
            {isSuccess && (
                <p className="success-message">Blog has been successfully added!</p>
            )}
        </div>);
}
 
export default Create;