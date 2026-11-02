"use client";

import { useState } from "react";

type Props = { id: string; title: string; playLabel: string };

// YouTube se načte až po kliknutí: rychlejší web a žádné cookies předem.
export default function VideoFacade({ id, title, playLabel }: Props) {
  const [on, setOn] = useState(false);
  return (
    <div className="video-frame">
      {on ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <button type="button" className="video-play" onClick={() => setOn(true)} aria-label={`${playLabel}: ${title}`}>
            <i aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </i>
            {playLabel}
          </button>
        </>
      )}
    </div>
  );
}
