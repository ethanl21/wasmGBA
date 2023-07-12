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
import { Slider } from "../ui/slider";
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
  let content = [];
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
        icon = <></>;
    }

    content.push(
      <MenubarItem className="justify-between">
        Slot {i}
        {icon}
      </MenubarItem>
    );
  }

  return content;
}

interface TopMenuBarProps {
  onOpenAboutDialog: () => void;
  onOpenUsageDialog: () => void;
  version?: string;
  upstream?: string;
  repo?: string;
  licenses?: string;
}
export default function TopMenuBar(props: TopMenuBarProps) {
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
            <MenubarCheckboxItem>Pixelated Scaling</MenubarCheckboxItem>
            <MenubarCheckboxItem>
              Pause <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              Fast Forward <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Audio</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Mute <MenubarShortcut>⌘M</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Slider defaultValue={[100]} max={100} step={1} />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              className="justify-between"
              onClick={props.onOpenAboutDialog}
            >
              About
              <AppWindow width="16" height="16" />
            </MenubarItem>
            <MenubarItem
              className="justify-between"
              onClick={props.onOpenUsageDialog}
            >
              Usage
              <AppWindow width="16" height="16" />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              className="justify-between"
              onClick={() => {
                window.open(props.repo, "_blank");
              }}
            >
              Source Code
              <Github width="16" height="16" />
            </MenubarItem>
            <MenubarItem
              className="justify-between"
              onClick={() => {
                window.open(props.licenses, "_blank");
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
