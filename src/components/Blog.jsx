import React, { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Blog.css'
import { useParams, useSearchParams } from 'react-router-dom';


// const title = 'Structure Your React Apps Like It`s 2030';
// const coverImage = 'https://images.squarespace-cdn.com/content/v1/5e2a78aea2dc434ac475b5a4/1610938263323-J2HOO9EMR39UVIDLLTDD/M20-C+FS+Sydney.jpg?format=2500w';
// const author = 'Author name';
// const markdown = `# heading size 1 \nThis project includes a broad range of work and various investigations in the pursuit of improving the understanding of and techniques involved in designing and fabricating a high-performance Formula SAE/Formula Student exhaust system.\n\nA stainless steel manifold and two double-pass absorptive mufflers were designed, manufactured and tested. The effect of various exhaust geometries on system back-pressure and noise results were investigated, along with the effect of an argon purge on weld quality. Major material failures are documented, as well as the nature of the degradation of absorptive material in the mufflers. This report also contains some details on avenues of study which were unable to be completed due to resource limitations or the COVID-19 outbreak.\n\n\n## heading size 2\nThis project includes a broad range of work and various investigations in the pursuit of improving the understanding of and techniques involved in designing and fabricating a high-performance Formula SAE/Formula Student exhaust system.\n\nA stainless steel manifold and two double-pass absorptive mufflers were designed, manufactured and tested. The effect of various exhaust geometries on system back-pressure and noise results were investigated, along with the effect of an argon purge on weld quality. Major material failures are documented, as well as the nature of the degradation of absorptive material in the mufflers. This report also contains some details on avenues of study which were unable to be completed due to resource limitations or the COVID-19 outbreak.\n\n![F1-car-cost-lead-McLaren-2021-800x450.jpg.webp](http://localhost:1337/uploads/F1_car_cost_lead_Mc_Laren_2021_800x450_jpg_2c612dc642.webp)\n\n### heading size 3\n- A high-performance FS/FSAE exhaust system was successfully designed and implemented.\n- The double-pass design of the muffler is justified by conclusive back-pressure testing results.\n- Back-pressure testing reveals a relationship of approximately 0.55 competition points per kPa of pressure.\n- The outlet direction is justified by noise test results, and outlet geometries validated by these tests are implemented on the vehicle.\n- A low-budget argon purge system is fabricated and tested, resulting in limited effectiveness depending on the nature of the weld.\n- The rate of packing material ejection/loss from the muffler is investigated but the results are inconclusive due to small sample size.`;

const Blog = () => {
    const params = useParams();
    const blogid = params['blogid'];
    const [blog, setBlog] = useState(null);

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
                    <div className="author">By {blog.author}</div>
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