"use client";
import { Calendar, MessageSquare } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
  {
    title: "Fire Protection Systems Maintenance and Safety",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "12", month: "February" },
    comments: 2,
  },
];

export const BlogSection = () => {
  return (
    <div className="emarket-blog-section">
      <div className="container">
        <div className="emarket-blog-header">
          <h3 className="emarket-section-title">Our Latest Blogs</h3>
          {/* <div
            className="emarket-carousel-pagination"
            id="blog-pagination"
          ></div> */}
        </div>

        <div className="emarket-blog-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={false}
            pagination={{
              el: "#blog-pagination",
              clickable: true,
              bulletClass: "emarket-carousel-nav",
              bulletActiveClass: "active",
              renderBullet: function (index, className) {
                return '<button class="' + className + '"></button>';
              },
            }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 15 },
              480: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="emarket-blog-card">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
