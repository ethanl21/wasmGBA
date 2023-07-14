import type { Meta, StoryObj } from "@storybook/react";
import { v4 as uuidv4 } from "uuid";

import ManageCheatDialog from "@/components/wasmgba/ManageCheatDialog";
import { GameCheat } from "@/lib/GameCheat";

const meta: Meta<typeof ManageCheatDialog> = {
  component: ManageCheatDialog,
  args: {
    open: true,
  },
  argTypes: {
    setIsOpen: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ManageCheatDialog>;
const debug_ids = [uuidv4(), uuidv4()];
const debug_cheats: GameCheat[] = [
  {
    id: debug_ids[0],
    name: "Unlimited Rare Candy in PC",
    code: "82025840 0044",
    cheatType: "codebreaker",
    enabled: true,
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
    activeCheatId: debug_ids[0],
  },

  argTypes: {
    activeCheatId: {
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
      <ManageCheatDialog
        open={args.open}
        setIsOpen={args.setIsOpen}
        cheats={args.cheats}
        activeCheatId={args.activeCheatId}
      />
    );
  },
};
