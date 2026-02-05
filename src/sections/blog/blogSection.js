import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MessageSquare,
} from "lucide-react";

const blogs = [
  {
    title: "Duis Autem Vel Eum Tempor Invidunt Ut Labore Et",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February" },
    comments: 0,
  },
  {
    title: "Enim Ad Minim Veniam Justo Duo Dolores Et Ea",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February" },
    comments: 0,
  },
  {
    title: "Duis Autem Vel Eum Irure Sed Diam Nonumy",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February" },
    comments: 0,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "13", month: "February" },
    comments: 0,
  },
];

export const BlogSection = () => {
  return (
    <div className="emarket-blog-section">
      <div className="container">
        <div className="emarket-blog-header">
          <h3 className="emarket-section-title">Our Latest Blogs</h3>
          <div className="emarket-carousel-controls">
            <button className="emarket-carousel-nav active"></button>
            <button className="emarket-carousel-nav"></button>
          </div>
        </div>

        <div className="emarket-blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="emarket-blog-card">
              <div className="emarket-blog-image-wrapper">
                <a href="#">
                  <img src={blog.image} alt={blog.title} />
                </a>
              </div>
              <div className="emarket-blog-content">
                <a href="#" className="emarket-blog-title">
                  {blog.title}
                </a>
                <div className="emarket-blog-meta">
                  <div className="emarket-meta-item">
                    <Calendar size={14} />
                    <span>
                      {blog.date.month} {blog.date.day}th, 2025
                    </span>
                  </div>
                  <div className="emarket-meta-item">
                    <MessageSquare size={14} />
                    <span>{blog.comments} Comment</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
