import React, { useRef, useState } from "react";

import Scrollbar from "@myBlocks/scrollbar/Scrollbar";

import Navigation from "@sections/navigation/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const targetHeight = target.scrollHeight - target.clientHeight;
    setScrolled(scrollTop / targetHeight);
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="vw-100 position-relative" style={{ height: "99vh" }}>
      <div className="video position-absolute top-0 w-100 h-100">
        <video
          src="bg-triangles-small.mp4"
          className="w-100 h-100"
          autoPlay
          muted
          loop
          ref={videoRef}
          style={{ objectFit: "cover" }}
          onPlay={() => (videoRef.current.playbackRate = 0.5)}
        />
      </div>
      <div className="w-100 h-100 d-flex flex-column">
        <Scrollbar progress={scrolled} />
        <div className={`w-100 h-100 pt-3 d-flex`} id="main">
          <Navigation />
          <div
            className="glass mx-2  px-3  h-100 text-center"
            id="content"
            onScroll={handleScroll}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
