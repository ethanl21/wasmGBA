import type { Meta, StoryObj } from "@storybook/react";
import { v4 as uuidv4 } from "uuid";

import CheatAccordion from "@/components/wasmgba/CheatAccordion";
import { GameCheat } from "@/lib/GameCheat";

const meta: Meta<typeof CheatAccordion> = {
  component: CheatAccordion,
  argTypes: {
    onCheatEnabledChanged: {
      action: "onCheatEnabledChanged",
      table: {
        disable: true,
      },
    },
    onSelectedCheatChanged: {
      action: "onSelectedCheatChanged",
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheatAccordion>;
const debug_ids = [uuidv4(), uuidv4()];
const debug_cheats: GameCheat[] = [
  {
    id: debug_ids[0],
    name: "Unlimited Rare Candy in PC",
    code: "82025840 0044",
    cheatType: "codebreaker",
    enabled: false,
  },
  {
    id: debug_ids[1],
    name: "Have All 8 Badges",
    code: "EFCE867D 5403D40D",
    cheatType: "gameshark",
    enabled: false,
  },
];

export const Default: Story = {
  args: {
    cheats: debug_cheats,
    selectedCheat: debug_ids[0],
  },

  argTypes: {
    selectedCheat: {
      options: debug_ids,
      control: {
        type: "select",
        labels: {
          [debug_ids[0]]: debug_cheats[0].name,
          [debug_ids[1]]: debug_cheats[1].name,
        },
      },
    },
  },

  render: ({ ...args }) => {
    return (
      <>
        <CheatAccordion
          cheats={args.cheats}
          selectedCheat={args.selectedCheat}
          onSelectedCheatChanged={args.onSelectedCheatChanged}
          onCheatEnabledChanged={args.onCheatEnabledChanged}
        />
      </>
    );
  },
};
