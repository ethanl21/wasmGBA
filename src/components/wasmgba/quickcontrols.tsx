import { useState } from "react";
import { Pause, Play, FastForward, Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "../ui/slider";

export default function QuickControls() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volumePercent, setVolumePercent] = useState(100);

  return (
    <>
      <Card className="flex flex-row items-center space-x-2 px-2">
        <Toggle aria-label="Pause" onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? <Play /> : <Pause />}
        </Toggle>
        <Toggle aria-label="Fast Forward">
          <FastForward />
        </Toggle>
        <Toggle
          aria-label="Mute"
          pressed={isMuted}
          onPressedChange={(val) => setIsMuted(val)}
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </Toggle>
        <Slider
          aria-label="Volume"
          value={[volumePercent]}
          onValueChange={(e) => setVolumePercent(e[0])}
          disabled={isMuted}
        />
        <p className="text-center content-center">{volumePercent}%</p>
      </Card>
    </>
  );
}
