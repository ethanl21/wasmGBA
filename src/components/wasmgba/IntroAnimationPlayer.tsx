import { forwardRef, useState } from "react";
import BiosAnimation from "../../assets/bios_animation.mp4";

interface IntroAnimationPlayerProps {
  onVideoEnded?: () => void;
}
const IntroAnimationPlayerPlayer = forwardRef(function _introAnimationPlayer(
  { onVideoEnded = () => {} }: IntroAnimationPlayerProps,
  ref: React.Ref<HTMLVideoElement>
) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const handleVideoEnded = () => {
    setIsVideoEnded(true);
    onVideoEnded();
  };

  return (
    <>
      <video
        className={
          isVideoEnded
            ? "transition-opacity ease-out duration-700 opacity-0"
            : "transition-opacity ease-in duration-100 opacity-100"
        }
        preload="auto"
        ref={ref}
        onEnded={handleVideoEnded}
        onPlay={() => setIsVideoEnded(false)}
      >
        <source src={BiosAnimation} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </>
  );
});

export default IntroAnimationPlayerPlayer;
