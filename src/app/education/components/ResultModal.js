"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/education.css";


export default function ResultModal({
  open,
  onClose,
  total,
  correct,
  name,
}) {
  const [showParty, setShowParty] = useState(false);

  const percentage = Math.round((correct / total) * 100);
  const passed = correct >= 8;
// fun confetti emojis
  const emojis = ["🎉", "🎊", "✨", "💫", "🔷", "🔶"];
// trigger party when modal opens with passing score
  useEffect(() => {
    if (open && passed) {
      setShowParty(true);
      const t = setTimeout(() => setShowParty(false), 5000);
      return () => clearTimeout(t);
    }
  }, [open, passed]);

  if (!open) return null;
// modal content with stats and a big percentage display
  return (
    <AnimatePresence>
      <div className="result-modal-backdrop">
        {/* 🎉 PARTY */}
        {showParty && (
          <div className="party-cannon-wrapper">
            {[...Array(60)].map((_, i) => (
              <motion.span
                key={i}
                className="confetti-emoji"
                initial={{
                  y: "100vh",
                  x: `${Math.random() * 100}vw`,
                  scale: 0,
                }}
                animate={{
                  y: "-10vh",
                  scale: [0, 1.3, 1],
                  rotate: Math.random() * 720,
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                }}
              >
                {emojis[i % emojis.length]}
              </motion.span>
            ))}
          </div>
        )}

        {/* 🏆 CARD */}
        <motion.div
          className="premium-result-card"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="card-header">
            <div className="status-icon">{passed ? "🏆" : "📝"}</div>
            <h2>{passed ? "Outstanding!" : "Try Again"}</h2>
            <p>
              Well done, <b>{name}</b>
            </p>
          </div>

          <div className="percentage-display-big">
            {percentage}%
          </div>

          <div className="stats-dashboard">
            <div className="stat-pill">
              <span>Total</span>
              <b>{total}</b>
            </div>
            <div className="stat-pill success">
              <span>Correct</span>
              <b>{correct}</b>
            </div>
            <div className="stat-pill error">
              <span>Wrong</span>
              <b>{total - correct}</b>
            </div>
          </div>

          <button className="primary-action-btn" onClick={onClose}>
            {passed ? "Continue Learning" : "Retry Module"}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}