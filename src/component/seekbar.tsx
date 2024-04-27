import { Slider, Stack } from "@mui/material";
import React from "react";

interface SeekBarProps {
  currentInSec: number;
  durationInSec: number;
  handleSeekBarValue: (value: number) => void;
}
export default function SeekBar(props: SeekBarProps) {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <p>mm:ss</p>
      <Slider></Slider>
    </Stack>
  );
}
