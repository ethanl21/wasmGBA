import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import CheatAccordion from "@/components/wasmgba/CheatAccordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { GameCheat } from "@/lib/GameCheat";

interface ManageCheatDialogProps {
  open?: boolean;
  setIsOpen?: (open: boolean) => void;
  cheats?: GameCheat[];
  activeCheatId?: string;
}
export default function ManageCheatsDialog({
  open = false,
  setIsOpen = () => {},
  cheats = [],
  activeCheatId = "",
}: ManageCheatDialogProps) {
  const [activeCheat, setActiveCheat] = useState("");
  const [cheatsList, setCheatsList] = useState<GameCheat[]>([]);

  const setCheatIsActive = (id: string, isActive: boolean) => {
    const cheat = cheatsList.find((c) => c.id === id);
    if (cheat !== undefined) {
      cheat.enabled = isActive;
      setCheatsList(cheatsList);
    }
  };

  if (cheatsList.length !== 0) {
    setCheatsList(cheats);
  }

  if (activeCheatId !== "" && activeCheat !== activeCheatId) {
    setActiveCheat(activeCheatId);
  }

  const handleNewCheatButtonClicked = () => {};

  const handleSaveCheatButtonClicked = () => {};

  const handleDeleteCheatButtonClicked = () => {};

  return (
    <>
      <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Cheats</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row space-x-2">
            <div className="flex w-1/2">
              <Card className="grow">
                <ScrollArea>
                  <CheatAccordion
                    cheats={cheats}
                    selectedCheat={activeCheatId}
                    onSelectedCheatChanged={setActiveCheat}
                    onCheatEnabledChanged={setCheatIsActive}
                  />
                </ScrollArea>
              </Card>
            </div>
            <div className="w-1/2 space-y-2">
              <div className="flex flex-row space-x-2">
                <Button onClick={handleNewCheatButtonClicked}>New Cheat</Button>
                <Button onClick={handleSaveCheatButtonClicked}>
                  Save Cheat
                </Button>
                <Button onClick={handleDeleteCheatButtonClicked}>
                  Delete Cheat
                </Button>
              </div>
              <Separator />
              <div>
                <Label htmlFor="cheatInput">Cheat Code</Label>
                <Textarea
                  id="cheatInput"
                  placeholder="Enter your cheat code here."
                  className="resize-none h-48"
                />
              </div>
              <div>
                <Label>Code Type</Label>
                <Card className="p-2">
                  <div className="flex justify-center">
                    <RadioGroup defaultValue="autodetect-type">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="autodetect-type"
                          id="autodetect-type"
                        />
                        <Label htmlFor="autodetect-type">
                          Autodetect (Recommended)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="gameshark-type"
                          id="gameshark-type"
                        />
                        <Label htmlFor="gameshark-type">GameShark</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="actionreplay-type"
                          id="actionreplay-type"
                        />
                        <Label htmlFor="actionreplay-type">
                          Action Replay MAX
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="codebreaker-type"
                          id="codebreaker-type"
                        />
                        <Label htmlFor="codebreaker-type">Codebreaker</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
