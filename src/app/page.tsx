"use client";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;
  return (
    <div>
      <p>動画</p>
      <ReactPlayer url="/free_sample_video.mp4" />
    </div>
  );
}
