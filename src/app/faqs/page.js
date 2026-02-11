"use client";

import { useState } from "react";
import "@/styles/policy.css";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqs = [
  { question: "Is there any hidden cost on products?", answer: "No. gfofireequipments.com does not charge any hidden fees such as octroi or custom duty. All applicable taxes are included at checkout. The price mentioned on the product page is the final price you pay." },
  { question: "How are products shipped?", answer: "We ship products using trusted courier partners like FedEx, DTDC, Blue Dart, Professional Couriers, and our own logistics. Some items may ship via Speed Post." },
  { question: "What is the estimated delivery time?", answer: "Orders are usually delivered within 6–7 working days after dispatch. Timelines may vary due to holidays, strikes, or transportation issues." },
  { question: "How can I track my order?", answer: "Track your order by logging into your account or using the tracking link sent to your email and mobile." },
  { question: "Will I receive tracking details?", answer: "Yes. After placing your order, you receive a confirmation message and email containing the tracking link to monitor your shipment." },
  { question: "Do you ship across India?", answer: "Yes. We deliver products PAN-India and cover almost all locations." },
  { question: "What is the return policy?", answer: "Returns are accepted only if the product is unused, in original condition, and with original packaging. Defective or incorrect products can be returned at delivery." },
  { question: "How can I cancel my order?", answer: "Orders can be canceled only before dispatch. Request cancellation via your account or contact us at info@gfofireequipments.com." },
  { question: "When will I receive my refund?", answer: "Refunds are processed within 5 working days after the product reaches our warehouse. You’ll be notified via email and SMS." },
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1>Frequently Asked Questions (FAQs)</h1>

        <div className="faq-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>

              <div
                className="faq-answer-wrapper"
                style={{ maxHeight: activeIndex === index ? "500px" : "0px" }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}

          {filteredFAQs.length === 0 && (
            <p className="no-result">No FAQs match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
  