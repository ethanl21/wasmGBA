import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UsageDialogProps {
  open?: boolean;
  setIsOpen?: (open: boolean) => void;
}
export default function UsageDialog(props: UsageDialogProps) {
  const keybinds = [
    {
      gba: "A",
      keyboard: "X",
    },
    {
      gba: "B",
      keyboard: "Z",
    },
    {
      gba: "Start",
      keyboard: "S",
    },
    {
      gba: "Select",
      keyboard: "A",
    },
    {
      gba: "L",
      keyboard: "Q",
    },
    {
      gba: "R",
      keyboard: "W",
    },
    {
      gba: "D-Pad Up",
      keyboard: "Up",
    },
    {
      gba: "D-Pad Left",
      keyboard: "Left",
    },
    {
      gba: "D-Pad Down",
      keyboard: "Down",
    },
    {
      gba: "D-Pad Right",
      keyboard: "Right",
    },
  ];

  return (
    <>
      <Dialog open={props.open} onOpenChange={props.setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Usage</DialogTitle>
          </DialogHeader>
          <div className="pl-5">
            <p>To get started:</p>
            <ul className="list-disc pl-10">
              <li>Upload a save file via File &gt; Import Save (optional)</li>
              <li>
                Upload a cheats file via File &gt; Import Cheats (optional)
              </li>
              <li>Upload ROM file via File &gt; Import ROM (required)</li>
              <li>Have fun playing your game!</li>
            </ul>
          </div>
          <h4 className="text-lg font-semibold leading-none tracking-tight">
            Controls
          </h4>
          <div>
            <Table className="border-slate-200 border-2">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-slate-200 border-r">
                    GBA Button
                  </TableHead>
                  <TableHead className="border-slate-200 border-r">
                    Keyboard Input
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keybinds.map((keybind) => (
                  <TableRow key={`gba-button-${keybind.gba}`}>
                    <td className="px-4 border-slate-200 border-r">
                      {keybind.gba}
                    </td>
                    <td className="px-4 border-slate-200 border-l">
                      {keybind.keyboard}
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
