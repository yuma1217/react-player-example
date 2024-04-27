"use client";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;
  return <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />;
}
