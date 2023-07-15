import { useEffect, useRef, useState } from "react";
import TopMenuBar from "@/components/wasmgba/TopMenubar";
import QuickControls from "@/components/wasmgba/QuickControls";
import AboutDialog from "@/components/wasmgba/AboutDialog";
import UsageDialog from "@/components/wasmgba/UsageDialog";
import IntroAnimationPlayer from "@/components/wasmgba/IntroAnimationPlayer";
import { useTheme } from "@/lib/ThemeProviderUseTheme";
import ManageCheatDialog from "@/components/wasmgba/ManageCheatsDialog";

function App() {
  const [aboutDialogIsOpen, setAboutDialogIsOpen] = useState(false);
  const [usageDialogIsOpen, setUsageDialogIsOpen] = useState(false);
  const [cheatsDialogIsOpen, setCheatsDialogIsOpen] = useState(false);
  const [introAnimationIsPlaying, setIntroAnimationIsPlaying] = useState(false);
  const [introVideoIsVisible, setIntroVideoIsVisible] = useState(false);

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState([100]);
  const [fastForward, setFastForward] = useState(false);
  const [pixelated, setPixelated] = useState(false);

  const introAnimationPlayerRef = useRef<HTMLVideoElement | null>(null);

  // light/dark mode
  const [_mode, setMode] = useState("light");
  const { setTheme } = useTheme();
  const onSelectMode = (mode: string) => {
    setMode(mode);
    setTheme(mode);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  });

  // event handlers
  const onImportROM = () => {
    setIntroAnimationIsPlaying(true);
    setIntroVideoIsVisible(true);
  };
  const onIntroAnimationFinished = () => {
    setIntroAnimationIsPlaying(false);
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
        <div className="flex flex-col justify-between flex-1 space-y-2">
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
            <div className="border-8 rounded-sm">
              <div className={introVideoIsVisible ? "" : "hidden"}>
                <IntroAnimationPlayer
                  isPlaying={introAnimationIsPlaying}
                  ref={introAnimationPlayerRef}
                  onVideoEnded={onIntroAnimationFinished}
                  volumePercentage={volume[0] / 100}
                  muted={muted}
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
