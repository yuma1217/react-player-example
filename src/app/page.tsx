"use client";
import SeekBar from "@/component/seekbar";
import Whiteboard from "@/component/whiteboard";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const [currentInSec, setCurrentInSec] = useState(0);
  const [durationInSec, setDurationInSec] = useState(0);
  const handleSeekBarValue = (value: number) => {
    setCurrentInSec(value);
  };
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;
  return (
    <div>
      <p>動画</p>
      <ReactPlayer
        url="/free_sample_video.mp4"
        width="100%"
        height="100%"
        playing={videoState.playing}
        // 時間の更新
        onProgress={(state) => {
          console.log(state.playedSeconds);
          setCurrentInSec(state.playedSeconds);
          setDurationInSec(state.loadedSeconds);
        }}
        onDuration={(duration) => console.log(duration)}
      />
      <Whiteboard />
      <SeekBar
        currentInSec={currentInSec}
        durationInSec={durationInSec}
        handleSeekBarValue={handleSeekBarValue}
      />
      <button onClick={playPauseHandler}>
        {videoState.playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
