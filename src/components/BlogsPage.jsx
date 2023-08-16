import React, { useContext, useEffect, useState } from 'react'
import './BlogsPage.css'
import { useNavigate } from 'react-router-dom';
import UpEvents from './upEvents';
import featured_posts from '../featured_posts.json'
import upcoming_events from '../upcoming_events.json'


// const title = 'Structure Your React Apps Like It`s 2030';
// const coverImage = 'https://images.squarespace-cdn.com/content/v1/5e2a78aea2dc434ac475b5a4/1610938263323-J2HOO9EMR39UVIDLLTDD/M20-C+FS+Sydney.jpg?format=2500w';
// const author = 'Author name';
// const markdown = `# heading size 1 \nThis project includes a broad range of work and various investigations in the pursuit of improving the understanding of and techniques involved in designing and fabricating a high-performance Formula SAE/Formula Student exhaust system.\n\nA stainless steel manifold and two double-pass absorptive mufflers were designed, manufactured and tested. The effect of various exhaust geometries on system back-pressure and noise results were investigated, along with the effect of an argon purge on weld quality. Major material failures are documented, as well as the nature of the degradation of absorptive material in the mufflers. This report also contains some details on avenues of study which were unable to be completed due to resource limitations or the COVID-19 outbreak.\n\n\n## heading size 2\nThis project includes a broad range of work and various investigations in the pursuit of improving the understanding of and techniques involved in designing and fabricating a high-performance Formula SAE/Formula Student exhaust system.\n\nA stainless steel manifold and two double-pass absorptive mufflers were designed, manufactured and tested. The effect of various exhaust geometries on system back-pressure and noise results were investigated, along with the effect of an argon purge on weld quality. Major material failures are documented, as well as the nature of the degradation of absorptive material in the mufflers. This report also contains some details on avenues of study which were unable to be completed due to resource limitations or the COVID-19 outbreak.\n\n![F1-car-cost-lead-McLaren-2021-800x450.jpg.webp](http://localhost:1337/uploads/F1_car_cost_lead_Mc_Laren_2021_800x450_jpg_2c612dc642.webp)\n\n### heading size 3\n- A high-performance FS/FSAE exhaust system was successfully designed and implemented.\n- The double-pass design of the muffler is justified by conclusive back-pressure testing results.\n- Back-pressure testing reveals a relationship of approximately 0.55 competition points per kPa of pressure.\n- The outlet direction is justified by noise test results, and outlet geometries validated by these tests are implemented on the vehicle.\n- A low-budget argon purge system is fabricated and tested, resulting in limited effectiveness depending on the nature of the weld.\n- The rate of packing material ejection/loss from the muffler is investigated but the results are inconclusive due to small sample size.`;
// const blog =
// {
//   title, coverImage, author, excerpt: markdown.slice(0, 30)
// }

const pastEvents = [
  {
    coverImage: "/past_events/webnr.png",
    id: "Webinar",
    title: "Webinar",
    content: `Team Phoenix Racing and Brahma Kumaris joined forces on World Environment Day to host a captivating webinar promoting the "Go Green" movement. The event focused on raising awareness about environmental issues and inspiring individuals to take sustainable actions for a healthier planet.`,
    date: "05-06-2023"
  },
  {
    coverImage: "/past_events/exhbtn.JPG",
    id: "Exhibition",
    title: "Exhibition",
    content: "Team Phoenix Racing is a Formula Student club that showcases their innovative racing car designs and engineering prowess in the lab exhibition and auto expo. They demonstrate their cutting-edge technologies, performance capabilities, and teamwork skills, attracting attention from motorsport enthusiasts and industry professionals alike.",
    date: "04-06-2023"
  },
  {
    coverImage: "/past_events/orientn (2).jpg",
    id: "Orientation",
    title: "Orientation",
    content: "Team Phoenix Racing Juniors hosted a dynamic and engaging orientation event, empowering young talent to explore their potential. With a focus on fostering teamwork, honing driving skills, and instilling a passion for motorsports, the event provided a thrilling introduction to the world of racing for aspiring juniors.",
    date: "04-06-2023"
  },
  {
    coverImage: "/past_events/FBEV_Qz.png",
    id: "FBE Quiz",
    title: "FBE Quiz",
    content: "The Formula Bharath Rule Book Quiz is a brief assessment that tests participants' knowledge of the rule book for Formula Bharath, an engineering design competition in India focused on building and racing formula-style race cars. The quiz covers various rules, regulations, and technical specifications that teams must adhere to while designing and constructing their vehicles.",
    date: "20-05-2023"
  },
  {
    coverImage: "/past_events/dr_drivng.jpg",
    id: "Dr Driving",
    title: "Dr Driving",
    content: "This exciting competition will put your RC car-building skills to the ultimate trial, packed with dynamic challenges, and will test your car's desire for speed.",
    date: "02-04-2023"
  },
  {
    coverImage: "/past_events/Rsrch_n_innv_day.jpg",
    id: "Research And Innovation Day",
    title: "Research And Innovation Day",
    content: "On the occasion of Research and Innovation Day, our team took part in a day long event, organised by Ashine, under SSIP 2.0, on 7th January. The exhibition catered us the chance to present our past and present achievements and interact with dignitaries and other tech-transfer-ready innovations developed by students and faculties of SVNIT. We are thankful for providing us this opportunity to extent our reach and gain exposure",
    date: "07-01-2023"
  },
  {
    coverImage: "/past_events/isro.jpg",
    id: "ISRO Space Show:24",
    title: "ISRO Space Show:24",
    content: "Thinkindia,a youth organisation, organised an ISRO space show on December 24 and 25, which featured projects from all of the technical clubs of SVNIT and ISRO. The ceremony was attended by the chief guest, Shri Virendra Singh (ITS), the guest of honour, Shri NJ Bhatt (Head VSSSE/SAC, ISRO), Dr. Anupam Shukla (Director SVNIT), Dr. Ravikant (Dean Student Welfare, SVNIT), and Shri Dushyant Mehta (President Of Alumni Association).",
    date: "25-12-2022"
  },
  {
    coverImage: "/past_events/EV_wrkshp.jpg",
    id: "EV vehicles workshop",
    title: "EV vehicles workshop",
    content: `ATPAC in collaboration with FSAE is organising "A workshop on EV vehicles" with Sushil Reddy. Sushil Reddy is an IIT Bombay alumnus from the Department of Energy Science and Engineering and an HEC Paris Alumnus from the MSc Program in Sustainability and Social Innovation. Sushil has a mention in the Guinness Book of World Records for the longest journey on an ebike.`,
    date: "22-11-2022"
  },
]

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
    <>
      <div className="news-hero">
        <div className='news-hero-image'>
        </div>
      </div>
      <div className="blogs-page-container">
        <div className="upcoming-events">
          <h1 className='blogs-page-title' >Upcoming Events</h1>
          <div className='blogs-list'>
            {upcoming_events && upcoming_events.map(({ coverImage, id, title, content, author, date, formLink }) => (
              <div className="blog-item" key={id}>
                <img className="blog-item-cover-image" src={coverImage} alt="Blog Cover" />
                <div className='blog-item-text'>
                  <h2 className="blog-item-title">{title}
                  </h2>
                  <p className="blog-item-excerpt">{content}</p>
                  <div className="blog-item-meta">
                    <div className="blog-item-info">
                      <a href={formLink}>
                        Register
                      </a>
                      <div className="blog-item-date"> {date}</div>
                      <div className="blog-item-author">{author}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="past-events">
          <h1 className="blogs-page-title">Past Events</h1>
          <div className="blogs-list">
            {pastEvents && pastEvents.map(({ coverImage, id, title, content, author, date, time }) => (
              <div className="blog-item" key={id}>
                <img className="blog-item-cover-image" src={coverImage} alt="Blog Cover" />
                <div className='blog-item-text'>
                  <h2 className="blog-item-title">{title}</h2>
                  <p className="blog-item-excerpt">{content}</p>
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
        <div className="all-blogs">
          <h1 className="blogs-page-title">Featured Posts</h1>
          <div className="blogs-list">
            {featured_posts && featured_posts.map(({ coverImage, id, title, content, author, date, time }) => (
              <div className="blog-item" onClick={() => navigate(`/blogs/${title}`)}>
                <img className="blog-item-cover-image" src={coverImage} alt="Blog Cover" />
                <div className='blog-item-text'>
                  <h2 className="blog-item-title">{title.slice(0, 50)}...</h2>
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
      </div>
    </>
  )
}

export default BlogsPage