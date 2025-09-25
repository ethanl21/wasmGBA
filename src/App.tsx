import { useRef, useState } from "react";
import TopMenuBar from "@/components/wasmgba/TopMenubar";
import QuickControls from "@/components/wasmgba/QuickControls";
import AboutDialog from "@/components/wasmgba/AboutDialog";
import UsageDialog from "@/components/wasmgba/UsageDialog";
import ManageCheatDialog from "@/components/wasmgba/ManageCheatsDialog";
import VideoPlayer, {
  VideoPlayerHandle,
} from "@/components/wasmgba/VideoPlayer";
import introVideo from "/bios_animation.mp4";

function App() {
  const [aboutDialogIsOpen, setAboutDialogIsOpen] = useState(false);
  const [usageDialogIsOpen, setUsageDialogIsOpen] = useState(false);
  const [cheatsDialogIsOpen, setCheatsDialogIsOpen] = useState(false);
  const [introVideoIsVisible, setIntroVideoIsVisible] = useState(false);

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState([100]);
  const [fastForward, setFastForward] = useState(false);
  const [pixelated, setPixelated] = useState(false);

  const videoPlayerRef = useRef<VideoPlayerHandle>(null);

  // event handlers
  const onImportROM = () => {
    videoPlayerRef.current?.play();
    setIntroVideoIsVisible(true);
  };
  const onIntroAnimationFinished = () => {
    setIntroVideoIsVisible(false);
  };

  return (
    <>
      <AboutDialog
        open={aboutDialogIsOpen}
        setIsOpen={setAboutDialogIsOpen}
        upstreamRepo={MGBA_UPSTREAM_REPO_URL}
        repo={WASMGBA_REPO_URL}
      />
      <UsageDialog open={usageDialogIsOpen} setIsOpen={setUsageDialogIsOpen} />

      <ManageCheatDialog
        open={cheatsDialogIsOpen}
        setIsOpen={setCheatsDialogIsOpen}
      />
      <main className="flex h-screen p-2">
        <div className="flex flex-1 flex-col justify-between space-y-2">
          <div className="flex">
            <TopMenuBar
              onOpenAboutDialog={() => setAboutDialogIsOpen(true)}
              onOpenUsageDialog={() => setUsageDialogIsOpen(true)}
              onOpenCheatsDialog={() => setCheatsDialogIsOpen(true)}
              onImportROM={() => onImportROM()} // this just plays the intro for now, todo: import ROM
              repo={WASMGBA_REPO_URL}
              licenses={WASMGBA_OSS_LICENSES_URL}
              volume={volume[0]}
              onVolumeChange={setVolume}
              muted={muted}
              onMutedChange={setMuted}
              paused={paused}
              onPausedChange={setPaused}
              fastForward={fastForward}
              onFastForwardChange={setFastForward}
              pixelated={pixelated}
              onPixelatedChange={setPixelated}
            />
          </div>

          {/* this just hides the intro for now, todo crossfade between intro and mGBA frame */}
          <div className="flex justify-center">
            <div className="rounded-sm border-8">
              <div className={introVideoIsVisible ? "" : "hidden"}>
                <VideoPlayer
                  src={introVideo}
                  ref={videoPlayerRef}
                  onEnded={onIntroAnimationFinished}
                  muted={muted}
                  controls={false}
                />
              </div>
              <div className={introVideoIsVisible ? "hidden" : "p-10"}>
                <p>gba content goes here</p>
              </div>
            </div>
          </div>

          <div className="flex w-1/2">
            <QuickControls
              paused={paused}
              onPausedChanged={setPaused}
              muted={muted}
              onMutedChanged={setMuted}
              volume={volume[0]}
              onVolumeChanged={setVolume}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
