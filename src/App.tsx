import { useState } from "react";
import "./App.css";
import TopMenuBar from "./components/wasmgba/topmenubar";
import QuickControls from "./components/wasmgba/quickcontrols";
import AboutDialog from "./components/wasmgba/aboutdialog";
import UsageDialog from "./components/wasmgba/usagedialog";

function App() {
  const [aboutDialogIsOpen, setAboutDialogIsOpen] = useState(false);
  const [usageDialogIsOpen, setUsageDialogIsOpen] = useState(false);

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(100);

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
          />
        </header>

        <main>
          <div className="fixed bottom-0 left-0 m-5 w-1/3">
            <QuickControls
              paused={paused}
              onPausedChanged={setPaused}
              muted={muted}
              onMutedChanged={setMuted}
              volume={volume}
              onVolumeChanged={setVolume}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
