import { Pause, Play, FastForward, Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";

interface QuickControlsProps {
  paused?: boolean;
  onPausedChanged?: (paused: boolean) => void;
  muted?: boolean;
  onMutedChanged?: (muted: boolean) => void;
  volume?: number;
  onVolumeChanged?: (volume: number[]) => void;
}
export default function QuickControls({
  paused = false,
  onPausedChanged = () => {},
  muted = false,
  onMutedChanged = () => {},
  volume = 100,
  onVolumeChanged = () => {},
}: QuickControlsProps) {
  return (
    <>
      <Card className="flex flex-row items-center space-x-2 px-2">
        <Toggle
          aria-label="Pause"
          onPressedChange={(val) => onPausedChanged(val)}
        >
          {paused ? <Play /> : <Pause />}
        </Toggle>
        <Toggle aria-label="Fast Forward">
          <FastForward />
        </Toggle>
        <Toggle
          aria-label="Mute"
          pressed={muted}
          onPressedChange={(val) => onMutedChanged(val)}
        >
          {muted ? <VolumeX /> : <Volume2 />}
        </Toggle>
        <div className="flex w-52">
        <Slider
          aria-label="Volume"
          value={[volume]}
          onValueChange={(e) => onVolumeChanged(e)}
          disabled={muted}
        />
        <p className="text-center content-center">{volume}%</p>
        </div>
      </Card>
    </>
  );
}
