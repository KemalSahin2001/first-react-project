const handleDelete = (id, blogs, setData) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);

    setData(newBlogs);

    fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('blog deleted');
    })
}

export default handleDelete;
  