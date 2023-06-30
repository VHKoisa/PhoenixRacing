import React, { createContext, useEffect, useState } from "react";

// Create the BlogContext
const BlogContext = createContext();

// Create the BlogProvider component
const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(null);
    const getBlog = (id) => {
        if (blogs) {
            for (let i = 0; i < blogs.length; i++) {
                if (blogs[i].id == id) return {
                    ...blogs[i].id,
                    coverImage: blogs[i]?.cover_image?.data?.attributes?.formats?.large?.url
                };
            }
        }
        return null;
    };

    
    return (
        <>
            <BlogContext.Provider value={{ blogs, getBlog }}>{children}</BlogContext.Provider>
        </>
    );
};

export { BlogContext, BlogProvider };
