import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Slider } from "@/components/ui/slider";
import {
  Save,
  TimerReset,
  FileDown,
  Github,
  Scale,
  AppWindow,
} from "lucide-react";

type SaveStateMenuProps = {
  saveStatesCount: number;
  mode: "save" | "load" | "export";
};
function SaveStateMenu(props: SaveStateMenuProps) {
  const content = [];
  for (let i = 0; i < props.saveStatesCount; i++) {
    let icon = null;
    switch (props.mode) {
      case "save":
        icon = <Save width="16" height="16" />;
        break;
      case "load":
        icon = <TimerReset width="16" height="16" />;
        break;
      case "export":
        icon = <FileDown width="16" height="16" />;
        break;
      default:
        icon = null;
    }

    content.push(
      <MenubarItem className="justify-between">
        Slot {i}
        {icon && icon}
      </MenubarItem>
    );
  }

  return <>{content}</>;
}

interface TopMenuBarProps {
  onOpenAboutDialog?: () => void;
  onOpenUsageDialog?: () => void;
  repo?: string;
  licenses?: string;
  volume?: number;
  onVolumeChange?: (volume: number[]) => void;
  muted?: boolean;
  onMutedChange?: (muted: boolean) => void;
  paused?: boolean;
  onPausedChange?: (paused: boolean) => void;
  fastForward?: boolean;
  onFastForwardChange?: (fastForward: boolean) => void;
  pixelated?: boolean;
  onPixelatedChange?: (pixelated: boolean) => void;
}
export default function TopMenuBar({
  onOpenAboutDialog = () => {},
  onOpenUsageDialog = () => {},
  repo = "",
  licenses = "",
  volume = 100,
  onVolumeChange = () => {},
  muted = false,
  onMutedChange = () => {},
  paused = false,
  onPausedChange = () => {},
  fastForward = false,
  onFastForwardChange = () => {},
  pixelated = false,
  onPixelatedChange = () => {},
}: TopMenuBarProps) {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Import ROM <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Import Save</MenubarItem>
            <MenubarItem>Import Cheats</MenubarItem>
            <MenubarItem className="justify-between">
              Manage Cheats
              <AppWindow width="16" height="16" />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Export Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Export Cheats</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Save State</MenubarSubTrigger>
              <MenubarSubContent>
                <SaveStateMenu saveStatesCount={10} mode="save" />
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Load State</MenubarSubTrigger>
              <MenubarSubContent>
                <SaveStateMenu saveStatesCount={10} mode="load" />
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Import Save State</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Export Save State</MenubarSubTrigger>
              <MenubarSubContent>
                <SaveStateMenu saveStatesCount={10} mode="export" />
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Emulation</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Reset <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Shutdown</MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem
              checked={pixelated}
              onCheckedChange={onPixelatedChange}
            >
              Pixelated Scaling
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={paused}
              onCheckedChange={onPausedChange}
            >
              Pause <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={fastForward}
              onCheckedChange={onFastForwardChange}
            >
              Fast Forward <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Audio</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={muted}
              onCheckedChange={onMutedChange}
            >
              Mute <MenubarShortcut>⌘M</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <Slider
              defaultValue={[100]}
              max={100}
              step={1}
              className="p-2"
              value={[volume]}
              onValueChange={onVolumeChange}
            />
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              className="justify-between"
              onClick={onOpenAboutDialog}
            >
              About
              <AppWindow width="16" height="16" />
            </MenubarItem>
            <MenubarItem
              className="justify-between"
              onClick={onOpenUsageDialog}
            >
              Usage
              <AppWindow width="16" height="16" />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              className="justify-between"
              onClick={() => {
                window.open(repo, "_blank");
              }}
            >
              Source Code
              <Github width="16" height="16" />
            </MenubarItem>
            <MenubarItem
              className="justify-between"
              onClick={() => {
                window.open(licenses, "_blank");
              }}
            >
              Licenses
              <Scale width="16" height="16" />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
