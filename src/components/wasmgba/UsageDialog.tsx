import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
export default function UsageDialog({
  open = false,
  setIsOpen = () => {},
}: UsageDialogProps) {
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
      <Dialog open={open} onOpenChange={setIsOpen}>
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
          <h4 className="text-lg leading-none font-semibold tracking-tight">
            Controls
          </h4>
          <div>
            <Table className="border-2 border-slate-200">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-r border-slate-200">
                    GBA Button
                  </TableHead>
                  <TableHead className="border-r border-slate-200">
                    Keyboard Input
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keybinds.map((keybind) => (
                  <TableRow key={`gba-button-${keybind.gba}`}>
                    <td className="border-r border-slate-200 px-4">
                      {keybind.gba}
                    </td>
                    <td className="border-l border-slate-200 px-4">
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
