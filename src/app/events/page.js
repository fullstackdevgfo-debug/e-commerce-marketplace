"use client";

import Image from "next/image";
import "@/styles/events.css";
// dummy data - replace with API calls in real app
const latestEvents = [
  {
    title: "Fire Safety Awareness Week",
    date: "Sept 25 – Sept 27, 2025",
    location: "Mumbai",
    image: "/GFO-Fireball.png",
    description:
      "Join our hands-on workshop about fire prevention & the proper use of fire safety equipment.",
  },
  {
    title: "GFO Automatic Fireball Launch",
    date: "Oct 10, 2025",
    location: "Delhi",
    image: "/GFO-Fireball.png",
    description:
      "Experience our latest fire safety product demo and safety measures in real-time.",
  },
  {
    title: "Community Fire Drill Workshop",
    date: "Nov 15, 2025",
    location: "Bangalore",
    image: "/GFO-Fireball.png",
    description:
      "Learn how to conduct safe fire drills and emergency responses for your community.",
  },
];

export default function EventsPage() {
  return (
    <div className="events-wrapper">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container text-center">
          <h1>Our Events & Workshops</h1>
          <p>
            Stay updated with our latest fire safety events, product demos, and community workshops dedicated to fire prevention and awareness.
          </p>
        </div>
      </section>

      {/* Latest Events Section */}
      <section id="latest_events" className="latest-events container">
        <h2 className="section-title">Latest Events</h2>
        <div className="events-grid">
          {latestEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-image-wrapper">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="event-image"
                />
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date} | {event.location}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="events-contact">
        <div className="container text-center">
          <h2>Want to Join Our Events?</h2>
          <p>Contact us to participate in upcoming workshops or for more information on fire safety programs.</p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
