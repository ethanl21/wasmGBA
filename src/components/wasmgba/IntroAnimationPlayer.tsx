import { forwardRef, useRef } from "react";
import biosAnimation from "/bios_animation.mp4";

interface IntroAnimationPlayerProps {
  onVideoEnded?: () => void;
  volumePercentage?: number;
  isPlaying?: boolean;
  muted?: boolean;
}
const IntroAnimationPlayer = forwardRef(function _introAnimationPlayer(
  {
    onVideoEnded = () => {},
    volumePercentage = 1,
    isPlaying = false,
    muted = false,
  }: IntroAnimationPlayerProps,
  parentRef
) {
  const localRef = useRef<HTMLVideoElement | null>(null);

  if (localRef.current) {
    localRef.current.volume = volumePercentage;
    if (isPlaying) {
      void localRef.current.play();
    } else {
      localRef.current.pause();
    }
  }

  return (
    <>
      <video
        ref={(ref) => {
          if (typeof parentRef === "function") parentRef(ref);
          else if (parentRef !== null) parentRef.current = ref;
          if (localRef !== null) localRef.current = ref;
        }}
        src={biosAnimation}
        onEnded={onVideoEnded}
        playsInline
        muted={muted}
      />
    </>
  );
});

export default IntroAnimationPlayer;
