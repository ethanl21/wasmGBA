import { useState } from "react";
import "./App.css";
import TopMenuBar from "./components/wasmgba/topmenubar";
import QuickControls from "./components/wasmgba/quickcontrols";
import AboutDialog from "./components/wasmgba/aboutdialog";
import UsageDialog from "./components/wasmgba/usagedialog";

function App() {
  const [aboutDialogIsOpen, setAboutDialogIsOpen] = useState(false);
  const [usageDialogIsOpen, setUsageDialogIsOpen] = useState(false);

  // todo: use a config file instead of hardcoding these
  const mGBARepoURL = new URL(
    "https://github.com/thenick775/mgba/tree/c3d5ca5d5ffd47b2866fe6e40a7d551d845e512a"
  );
  const sourceRepoURL = new URL("https://github.com/ethanl21/wasmGBA");

  return (
    <>
      <AboutDialog
        open={aboutDialogIsOpen}
        setIsOpen={setAboutDialogIsOpen}
        upstreamRepo={mGBARepoURL}
        repo={sourceRepoURL}
      />
      <UsageDialog open={usageDialogIsOpen} setIsOpen={setUsageDialogIsOpen} />

      <div className="container">
        <header className="fixed top-0 left-0 m-5">
          <TopMenuBar
            onOpenAboutDialog={() => setAboutDialogIsOpen(true)}
            onOpenUsageDialog={() => setUsageDialogIsOpen(true)}
            repo={sourceRepoURL}
          />
        </header>

        <main>
          <div className="fixed bottom-0 left-0 m-5 w-1/3">
            <QuickControls />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
