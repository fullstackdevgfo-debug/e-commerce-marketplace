"use client";

import { useState } from "react";
import "../../styles/lercTestedSection.css";
// dummy video section - replace with API calls in real app
export default function LercTestedSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="lerc-section">
      <div className="lerc-container">
        <div className="lerc-video">

          {/* POSTER + CUSTOM PLAY BUTTON */}
          {!play && (
            <>
              <div className="video-poster" onClick={() => setPlay(true)}>
                <div className="play-button">▶</div>
              </div>

              {/* HALF INSIDE + HALF OUTSIDE TEXT */}
              <div className="video-label">
                GFO Modular Test
              </div>
            </>
          )}

          {/* YOUTUBE LOAD AFTER CLICK */}
          {play && (
            <iframe
              src="https://www.youtube.com/embed/D3jLM1ROdHQ?autoplay=1&rel=0&controls=1"
              title="GFO Modular Test"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

        </div>
      </div>
    </section>
  );
}
