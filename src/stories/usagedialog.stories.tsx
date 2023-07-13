import type { Meta, StoryObj } from "@storybook/react";

import UsageDialog from "@/components/wasmgba/UsageDialog";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof UsageDialog> = {
  component: UsageDialog,
  args: {
    open: false,
  },
  argTypes: {
    setIsOpen: {
      action: "setIsOpen",
      table: {
        disable: true,
      },
    },
    open: {
      defaultValue: false,
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof UsageDialog>;
export const Default: Story = {
  render: ({ open }) => {
    return (
      <>
        <Button
          onClick={() => {
            open = true;
          }}
        >
          Show Usage Dialog
        </Button>
        <UsageDialog
          open={open as boolean}
          setIsOpen={(isOpen) => {
            open = isOpen;
          }}
        />
      </>
    );
  },
};
