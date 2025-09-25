import { useRef, useImperativeHandle } from "react";

export type VideoSource = {
  src: string;
  type?: string;
};

export type VideoPlayerHandle = {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
};

export type VideoPlayerProps = {
  src?: string;
  sources?: VideoSource[];
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onPlay?: React.ReactEventHandler<HTMLVideoElement>;
  onPause?: React.ReactEventHandler<HTMLVideoElement>;
  onEnded?: React.ReactEventHandler<HTMLVideoElement>;
  onTimeUpdate?: React.ReactEventHandler<HTMLVideoElement>;
  ref?: React.ForwardedRef<VideoPlayerHandle>;
};

export default function VideoPlayer({
  src,
  sources = [],
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className,
  style,
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
  ref,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(
    ref,
    (): VideoPlayerHandle => ({
      play: () => videoRef.current?.play(),
      pause: () => videoRef.current?.pause(),
      seek: (time) => {
        if (videoRef.current) videoRef.current.currentTime = time;
      },
      getCurrentTime: () => videoRef.current?.currentTime ?? 0,
      getDuration: () => videoRef.current?.duration ?? 0,
    }),
  );

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        style={style}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
      >
        {src && <source src={src} />}
        {sources.map(({ src, type }, idx) => (
          <source key={idx} src={src} type={type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </>
  );
}
