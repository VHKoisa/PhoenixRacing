import React, { useContext, useEffect, useState } from 'react'
import './BlogsPage.css'
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/blog-context'

// const title = 'Structure Your React Apps Like It`s 2030';
// const coverImage = 'https://images.squarespace-cdn.com/content/v1/5e2a78aea2dc434ac475b5a4/1610938263323-J2HOO9EMR39UVIDLLTDD/M20-C+FS+Sydney.jpg?format=2500w';
// const author = 'Author name';
// const markdown = `# heading size 1 \nThis project includes a broad range of work and various investigations in the pursuit of improving the understanding of and techniques involved in designing and fabricating a high-performance Formula SAE/Formula Student exhaust system.\n\nA stainless steel manifold and two double-pass absorptive mufflers were designed, manufactured and tested. The effect of various exhaust geometries on system back-pressure and noise results were investigated, along with the effect of an argon purge on weld quality. Major material failures are documented, as well as the nature of the degradation of absorptive material in the mufflers. This report also contains some details on avenues of study which were unable to be completed due to resource limitations or the COVID-19 outbreak.\n\n\n## heading size 2\nThis project includes a broad range of work and various investigations in the pursuit of improving the understanding of and techniques involved in designing and fabricating a high-performance Formula SAE/Formula Student exhaust system.\n\nA stainless steel manifold and two double-pass absorptive mufflers were designed, manufactured and tested. The effect of various exhaust geometries on system back-pressure and noise results were investigated, along with the effect of an argon purge on weld quality. Major material failures are documented, as well as the nature of the degradation of absorptive material in the mufflers. This report also contains some details on avenues of study which were unable to be completed due to resource limitations or the COVID-19 outbreak.\n\n![F1-car-cost-lead-McLaren-2021-800x450.jpg.webp](http://localhost:1337/uploads/F1_car_cost_lead_Mc_Laren_2021_800x450_jpg_2c612dc642.webp)\n\n### heading size 3\n- A high-performance FS/FSAE exhaust system was successfully designed and implemented.\n- The double-pass design of the muffler is justified by conclusive back-pressure testing results.\n- Back-pressure testing reveals a relationship of approximately 0.55 competition points per kPa of pressure.\n- The outlet direction is justified by noise test results, and outlet geometries validated by these tests are implemented on the vehicle.\n- A low-budget argon purge system is fabricated and tested, resulting in limited effectiveness depending on the nature of the weld.\n- The rate of packing material ejection/loss from the muffler is investigated but the results are inconclusive due to small sample size.`;
// const blog =
// {
//   title, coverImage, author, excerpt: markdown.slice(0, 30)
// }

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchBlogs = async () => {
      let url = `${import.meta.env.VITE_BACKEND_HOST}/api/blogs?populate=cover_image`;
      const response = await fetch(url, { signal: abortController.signal });
      let fetchedData = await response.json();
      let fetchedBlogs = fetchedData.data.map((data) => {
        console.log(data?.attributes?.cover_image?.data?.attributes?.formats?.thumbnail?.url);
        return {
          ...data.attributes,
          date: new Date(data.attributes.publishedAt).toDateString(),
          time: new Date(data.attributes.publishedAt).toLocaleTimeString(),
          id: data.id,
          coverImage: `${import.meta.env.VITE_BACKEND_HOST}${data?.attributes?.cover_image?.data?.attributes?.formats?.small?.url
            }`,
        };
      });
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();

    return () => {
      if (!blogs) {
        abortController.abort();
      }
    }
  }, []);


  return (
    <div className="blogs-page-container">
      <h1 className="blogs-page-title">Blog Posts</h1>
      <div className="blogs-list">
        {blogs && blogs.map(({ coverImage, id, title, content, author, date, time }) => (
          <div className="blog-item" onClick={() => navigate(`/blogs/${id}`)}>
            <img className="blog-item-cover-image" src={coverImage} alt="Blog Cover" />
            <div className='blog-item-text'>
              <h2 className="blog-item-title">{title.slice(0,50)}...</h2>
              <p className="blog-item-excerpt">{content.slice(0, 130)}...</p>
              <div className="blog-item-meta">
                <div className="blog-item-info">
                  <div className="blog-item-date"> {date}</div>
                  <div className="blog-item-author">{author}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogsPage