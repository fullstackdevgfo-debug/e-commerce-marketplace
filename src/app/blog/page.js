"use client";

import Link from "next/link";
import { Calendar, MessageSquare } from "lucide-react";
import "@/styles/blogList.css";

const blogs = [
  {
    slug: "innovative-fire-safety-solutions",
    title: "Innovative Fire Safety Solutions for Modern Buildings",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February", year: 2025 },
    comments: 0,
    excerpt:
      "Explore modern fire safety solutions designed to protect lives, property, and infrastructure with advanced technology.",
  },
  {
    slug: "innovative-fire-safety-solutions",
    title: "Fire Protection Systems Maintenance and Safety",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "12", month: "February", year: 2025 },
    comments: 2,
    excerpt:
      "Regular maintenance of fire protection systems is essential to ensure safety compliance and emergency readiness.",
  },
   {
    slug: "innovative-fire-safety-solutions",
    title: "Innovative Fire Safety Solutions for Modern Buildings",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February", year: 2025 },
    comments: 0,
    excerpt:
      "Explore modern fire safety solutions designed to protect lives, property, and infrastructure with advanced technology.",
  },
  {
    slug: "innovative-fire-safety-solutions",
    title: "Fire Protection Systems Maintenance and Safety",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "12", month: "February", year: 2025 },
    comments: 2,
    excerpt:
      "Regular maintenance of fire protection systems is essential to ensure safety compliance and emergency readiness.",
  },
   {
    slug: "innovative-fire-safety-solutions",
    title: "Innovative Fire Safety Solutions for Modern Buildings",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February", year: 2025 },
    comments: 0,
    excerpt:
      "Explore modern fire safety solutions designed to protect lives, property, and infrastructure with advanced technology.",
  },
  {
    slug: "innovative-fire-safety-solutions",
    title: "Fire Protection Systems Maintenance and Safety",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "12", month: "February", year: 2025 },
    comments: 2,
    excerpt:
      "Regular maintenance of fire protection systems is essential to ensure safety compliance and emergency readiness.",
  },
];

export default function BlogPage() {
  return (
    <section className="blog-page">
      <div className="container">
        <h1 className="blog-page-title">Our Blogs</h1>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                <img src={blog.image} alt={blog.title} />
              </Link>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>
                    <Calendar size={14} />
                    {blog.date.month} {blog.date.day}, {blog.date.year}
                  </span>
                  <span>
                    <MessageSquare size={14} />
                    {blog.comments} Comments
                  </span>
                </div>

                <h3 className="blog-card-title">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p className="blog-excerpt">{blog.excerpt}</p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="read-more-btn"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
