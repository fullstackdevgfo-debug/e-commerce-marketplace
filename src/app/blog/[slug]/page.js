import { Calendar, MessageSquare } from "lucide-react";
import "@/styles/singleBlog.css";

const blogs = [
  {
    slug: "innovative-fire-safety-solutions",
    title: "Innovative Fire Safety Solutions for Modern Buildings",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp",
    date: { day: "14", month: "February" },
    comments: 0,
    content: `
      <p>
        Fire safety has become a critical requirement for modern buildings due
        to increased infrastructure complexity and higher occupancy levels.
        Innovative fire safety solutions ensure early detection, faster
        response, and effective fire suppression.
      </p>

      <h2>Understanding Modern Fire Safety Systems</h2>
      <p>
        Today’s fire protection systems integrate intelligent detection,
        automated suppression, and centralized monitoring to minimize damage
        and protect lives.
      </p>

      <h3>Core Components of Fire Safety Solutions</h3>
      <ul>
        <li>Fire Detection & Alarm Systems</li>
        <li>Automatic Fire Suppression Systems</li>
        <li>Fire Hydrant & Hose Reel Systems</li>
        <li>Emergency Exit Lighting</li>
        <li>Portable Fire Extinguishers</li>
      </ul>

      <h2>Why Advanced Fire Protection Matters</h2>
      <p>
        Conventional fire safety systems often fail to respond quickly in
        large-scale buildings. Modern solutions reduce response time and
        provide real-time alerts to emergency teams.
      </p>

      <blockquote>
        Fire safety is not just about compliance — it’s about protecting lives,
        property, and business continuity.
      </blockquote>

      <h3>Benefits of Innovative Fire Safety Systems</h3>
      <ul>
        <li>Enhanced occupant safety</li>
        <li>Reduced fire damage and downtime</li>
        <li>Compliance with national safety standards</li>
        <li>Improved emergency response coordination</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Investing in innovative fire safety solutions is essential for modern
        infrastructure. Advanced systems provide reliable protection and
        ensure peace of mind for building owners and occupants.
      </p>
    `,
  },
];

export default async function BlogDetail({ params }) {
  const { slug } = await params; // ✅ REQUIRED FIX

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h2 style={{ padding: 50 }}>Blog not found</h2>;
  }

  return (
    <section className="single-blog">
      <div className="container">
        <h1 className="single-blog-title">{blog.title}</h1>

        <div className="single-blog-meta">
          <span>
            <Calendar size={16} />
            {blog.date.month} {blog.date.day}, 2025
          </span>
          <span>
            <MessageSquare size={16} />
            {blog.comments} Comments
          </span>
        </div>

        <div className="single-blog-image-wrapper">
          <img src={blog.image} alt={blog.title} />
        </div>

        <div
          className="single-blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}
