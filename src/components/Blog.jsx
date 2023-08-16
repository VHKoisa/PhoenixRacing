import React, { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Blog.css'
import { useParams } from 'react-router-dom';
import featured_posts from '../../src/featured_posts.json'


const Blog = () => {
    const params = useParams();
    const blogid = params['blogid'];
    const [blog, setBlog] = useState(featured_posts.find(({ title }) => title === blogid));

    useEffect(() => {
        const abortController = new AbortController();
        const fetchBlog = async () => {
            let url = `${import.meta.env.VITE_BACKEND_HOST}/api/blogs/${blogid}?populate=cover_image`;
            const response = await fetch(url, { signal: abortController.signal });
            let fetchedData = await response.json();
            let blogData = {
                ...fetchedData.data.attributes,
                id: fetchedData.data.id,
                coverImage: `${import.meta.env.VITE_BACKEND_HOST}${fetchedData?.data?.attributes?.cover_image?.data?.attributes?.formats?.large?.url}`
            };
            setBlog(blogData);
        };

        fetchBlog();

        return () => {
            if (!blog) {
                abortController.abort();
            }
        }
    }, []);


    return (
        <div className='blog-container'>
            {
                blog &&
                <div className="blog-post">
                    <h1 className="title">{blog.title}</h1>
                    {/* <div className="author">By {blog.author}</div> */}
                    <img className="cover-image" src={blog.coverImage} alt="Blog Cover" />
                    <div className="content">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            }
        </div>
    )
}

export default Blog