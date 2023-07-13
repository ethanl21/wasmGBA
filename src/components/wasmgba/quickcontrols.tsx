import { useState } from "react";
import { Pause, Play, FastForward, Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";

interface QuickControlsProps {
  paused: boolean;
  onPausedChanged: (paused: boolean) => void;
  muted: boolean;
  onMutedChanged: (muted: boolean) => void;
  volume: number;
  onVolumeChanged: (volume: number) => void;
}
export default function QuickControls(props: QuickControlsProps) {
  return (
    <>
      <Card className="flex flex-row items-center space-x-2 px-2">
        <Toggle aria-label="Pause" onClick={() => props.onPausedChanged(props.paused)}>
          {props.paused ? <Play /> : <Pause />}
        </Toggle>
        <Toggle aria-label="Fast Forward">
          <FastForward />
        </Toggle>
        <Toggle
          aria-label="Mute"
          pressed={props.muted}
          onPressedChange={(val) => props.onMutedChanged(val)}
        >
          {props.muted ? <VolumeX /> : <Volume2 />}
        </Toggle>
        <Slider
          aria-label="Volume"
          value={[props.volume]}
          onValueChange={(e) => props.onVolumeChanged(e[0])}
          disabled={props.muted}
        />
        <p className="text-center content-center">{props.volume}%</p>
      </Card>
    </>
  );
}
