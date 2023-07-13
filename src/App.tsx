import { useState } from "react";
import "./App.css";
import TopMenuBar from "./components/wasmgba/TopMenubar";
import QuickControls from "./components/wasmgba/QuickControls";
import AboutDialog from "./components/wasmgba/AboutDialog";
import UsageDialog from "./components/wasmgba/UsageDialog";

function App() {
  const [aboutDialogIsOpen, setAboutDialogIsOpen] = useState(false);
  const [usageDialogIsOpen, setUsageDialogIsOpen] = useState(false);

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState([100]);
  const [fastForward, setFastForward] = useState(false);
  const [pixelated, setPixelated] = useState(false);

  return (
    <>
      <AboutDialog
        open={aboutDialogIsOpen}
        setIsOpen={setAboutDialogIsOpen}
        upstreamRepo={MGBA_UPSTREAM_REPO_URL}
        repo={WASMGBA_REPO_URL}
      />
      <UsageDialog open={usageDialogIsOpen} setIsOpen={setUsageDialogIsOpen} />

      <div className="container">
        <header className="fixed top-0 left-0 m-5">
          <TopMenuBar
            onOpenAboutDialog={() => setAboutDialogIsOpen(true)}
            onOpenUsageDialog={() => setUsageDialogIsOpen(true)}
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
            upstream={MGBA_UPSTREAM_REPO_URL}
            version={WASMGBA_VERSION}

          />
        </header>

        <main>
          <div className="fixed bottom-0 left-0 m-5 w-1/3">
            <QuickControls
              paused={paused}
              onPausedChanged={setPaused}
              muted={muted}
              onMutedChanged={setMuted}
              volume={volume[0]}
              onVolumeChanged={setVolume}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
