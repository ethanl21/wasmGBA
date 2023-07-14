import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { GameCheat } from "@/lib/GameCheat";
import { Checkbox } from "@/components/ui/checkbox";

export interface CheatAccordionProps {
  cheats?: GameCheat[];
  selectedCheat?: string;
  onSelectedCheatChanged?: (id: string) => void;
  onCheatEnabledChanged?: (id: string, isEnabled: boolean) => void;
}
export default function CheatAccordion({
  cheats = [],
  selectedCheat = "",
  onSelectedCheatChanged = () => {},
  onCheatEnabledChanged = () => {},
}: CheatAccordionProps) {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        onValueChange={onSelectedCheatChanged}
        value={selectedCheat}
      >
        {cheats.map((cheat) => (
          <div className="flex flex-row">
            <Checkbox
              className="self-start m-5"
              checked={cheat.enabled}
              onCheckedChange={(isChecked) =>
                onCheatEnabledChanged(cheat.id, isChecked as boolean)
              }
            />
            <AccordionItem className="grow" value={cheat.id}>
              <AccordionTrigger>
                <div className="flex flex-row space-x-2">
                  <span>{cheat.name}</span>
                  <p className="text-sm font-medium leading-none hover:">
                    {{
                      gameshark: <span>GameShark</span>,
                      codebreaker: <span>CodeBreaker</span>,
                      actionreplay: <span>Action Replay MAX</span>,
                    }[cheat.cheatType] || <span>Unknown</span>}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex">
                  <p className="shrink rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {cheat.code}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  );
}
