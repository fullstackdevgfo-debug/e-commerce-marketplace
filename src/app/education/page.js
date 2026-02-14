"use client";

import { useState, useEffect } from "react";
import {
  PlayCircle,
  CheckCircle2,
  Lock,
  User,
  Clock,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/education.css";
import "../../styles/result-modal.css";

// dummy data - replace with API calls in real app
const videos = [
  {
    id: 1,
    title: "Fire Safety Basics",
    duration: "12 mins",
    url: "https://www.youtube.com/embed/AhhwQ0ll2qI",
    questions: [
      { q: "Fire needs oxygen?", a: "Yes" },
      { q: "Water can be used on electrical fire?", a: "No" },
      { q: "Fire extinguisher color for CO2?", a: "Black" },
      { q: "Smoke rises?", a: "Yes" },
      { q: "Fire triangle has 3 elements?", a: "Yes" },
      { q: "Gas fires are Class C?", a: "Yes" },
      { q: "Fire drills are useless?", a: "No" },
      { q: "CO2 leaves residue?", a: "No" },
      { q: "Fire blanket used for small fires?", a: "Yes" },
      { q: "Panic helps in fire?", a: "No" },
    ],
  },
  {
    id: 2,
    title: "Using Fire Extinguishers",
    duration: "9 mins",
    url: "https://www.youtube.com/embed/ll68o66elQ0",
    questions: [
      { q: "Fire needs oxygen?", a: "Yes" },
      { q: "Water can be used on electrical fire?", a: "No" },
      { q: "Fire extinguisher color for CO2?", a: "Black" },
      { q: "Smoke rises?", a: "Yes" },
      { q: "Fire triangle has 3 elements?", a: "Yes" },
      { q: "Gas fires are Class C?", a: "Yes" },
      { q: "Fire drills are useless?", a: "No" },
      { q: "CO2 leaves residue?", a: "No" },
      { q: "Fire blanket used for small fires?", a: "Yes" },
      { q: "Panic helps in fire?", a: "No" },
    ],
  },
  {
    id: 3,
    title: "Emergency Evacuation Plan",
    duration: "8 mins",
  },
];

export default function EducationModule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completedVideos, setCompletedVideos] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [name, setName] = useState("Learner");

  // Load user data and progress from localStorage on mount
  useEffect(() => {
    setName(localStorage.getItem("edu_name") || "Learner");
    setCompletedVideos(JSON.parse(localStorage.getItem("edu_completed")) || []);
    setCurrentIndex(Number(localStorage.getItem("edu_index")) || 0);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("edu_completed", JSON.stringify(completedVideos));
    localStorage.setItem("edu_index", currentIndex);
  }, [completedVideos, currentIndex]);

  const currentVideo = videos[currentIndex];
  const total = currentVideo.questions?.length || 0;
  const answered = Object.keys(answers).length;
  const allAnswered = answered === total && total > 0;

  const submitTest = () => {
    let c = 0;
    currentVideo.questions.forEach((q, i) => {
      if (answers[i] === q.a) c++;
    });

    setCorrect(c);
    setShowResult(true);

    if (c >= 8 && !completedVideos.includes(currentIndex)) {
      setCompletedVideos([...completedVideos, currentIndex]);
    }
  };

  const percentage = Math.round((correct / total) * 100) || 0;

  return (
    <section className="edu-page">
      
      <div className="edu-main">
        <h1>{currentVideo.title}</h1>

        <div className="meta">
          <span><User size={16} /> {name}</span>
          <span><Clock size={16} /> {currentVideo.duration}</span>
          <span><Award size={16} /> Safety Training</span>
        </div>

        {currentVideo.url && (
          <div className="video-wrapper">
            <iframe src={currentVideo.url} allowFullScreen />
          </div>
        )}

        {currentVideo.questions && (
          <div className="quiz-box">
            <h3>Assessment (Need 8/10 to pass)</h3>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(answered / total) * 100}%` }}
              />
            </div>

            {currentVideo.questions.map((item, i) => (
              <div key={i} className="question-card">
                <p>{i + 1}. {item.q}</p>

                <div className="options">
                  {["Yes", "No", "Black"].map((opt) => (
                    <button
                      key={opt}
                      className={answers[i] === opt ? "selected" : ""}
                      onClick={() => setAnswers({ ...answers, [i]: opt })}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              className="submit-btn"
              disabled={!allAnswered}
              onClick={submitTest}
            >
              Submit Test
            </button>
          </div>
        )}
      </div>

      {/* ================= RIGHT ================= */}
      <aside className="edu-sidebar">
        <div className="sidebar-card">
          <h4>Your Progress</h4>

          <div className="circle">
            <span>
              {Math.round((completedVideos.length / videos.length) * 100)}%
            </span>
            <small>Complete</small>
          </div>

           <div className="stats">
            <div>
              <b>{answered}/{total}</b>
              <span>Answered</span>
            </div>
            <div>
              <b>{completedVideos.length * 100}</b>
              <span>XP</span>
            </div>
          </div>
        </div>

        <div className="sidebar-card">
          <h4>Course Content</h4>

          {videos.map((v, i) => {
            const done = completedVideos.includes(i);
            const active = i === currentIndex;
            const locked = i > currentIndex && !done;

            return (
              <div
                key={v.id}
                className={`side-question ${done ? "done" : active ? "active" : "locked"}`}
                onClick={() => !locked && (setCurrentIndex(i), setAnswers({}))}
              >
                {done ? <CheckCircle2 size={18} /> : active ? <PlayCircle size={18} /> : <Lock size={18} />}
                <div>
                  <p>{v.title}</p>
                  <small>{v.duration}</small>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* result modal */}
      <AnimatePresence>
        {showResult && (
          <div className="result-modal-backdrop">
            <motion.div className="result-card">
              <div className="icon">{correct >= 8 ? "🏆" : "📝"}</div>
              <h2>{correct >= 8 ? "Outstanding!" : "Try Again"}</h2>
              <p>Well done, <b>{name}</b></p>

              <div className="percentage-display-big">{percentage}%</div>

              <button
                className="primary-btn"
                onClick={() => {
                  setShowResult(false);
                  setAnswers({});
                  if (correct >= 8 && currentIndex < videos.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                  }
                }}
              >
                {correct >= 8 ? "Next Video" : "Retry Module"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}