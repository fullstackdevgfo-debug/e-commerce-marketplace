import "@/styles/about.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About Our Company</h1>
          <p className="about-subtitle">
            Delivering Quality Fire Protection Solutions Across Industries
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content container">
        <div className="about-text">
          <p>
            Our company is dedicated to providing top-tier fire safety and
            protection services tailored for modern commercial and residential
            environments. We combine expertise, experience, and innovation to
            ensure the safety and security of your property.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver reliable and compliant fire protection systems that
            protect lives and property while exceeding customer expectations.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be recognized as a trusted leader in fire safety excellence,
            delivering innovative solutions and service quality that sets new
            industry standards.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://gfofireequipments.com/wp-content/uploads/2025/02/banner_fire_8.webp"
            alt="About Us"
            width={800}
            height={450}
            priority
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features container">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Reliable Solutions</h3>
            <p>
              We provide trusted and tested fire protection systems that ensure
              long-term safety and performance.
            </p>
          </div>

          <div className="feature-box">
            <h3>Certified Experts</h3>
            <p>
              Our team is trained, certified, and experienced in fire safety
              compliance and installation.
            </p>
          </div>

          <div className="feature-box">
            <h3>Customer Support</h3>
            <p>
              We are always available to assist you from consultation to service
              after installation.
            </p>
          </div>

          <div className="feature-box">
            <h3>Industry Compliance</h3>
            <p>
              All our solutions meet the latest fire safety standards and local
              regulations.
            </p>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFO */}
      <section className="about-extra container">
        <h2>Committed to Excellence</h2>
        <p>
          Our approach combines quality materials, technical expertise, and a
          customer-first mindset. Every project is handled with care and
          attention to detail, ensuring optimal performance and peace of mind
          for every client.
        </p>
        <ul>
          <li>Comprehensive Consultation</li>
          <li>Tailored Fire Protection Design</li>
          <li>Professional Installation</li>
          <li>Maintenance & Support</li>
        </ul>
      </section>
    </main>
  );
}
