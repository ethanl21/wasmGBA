import type { Meta, StoryObj } from "@storybook/react";

import UsageDialog from "@/components/wasmgba/UsageDialog";

const meta: Meta<typeof UsageDialog> = {
  component: UsageDialog,
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
};

export default meta;

type Story = StoryObj<typeof UsageDialog>;
export const Default: Story = {
  render: ({ open, setIsOpen }) => {
    return <UsageDialog open={open} setIsOpen={setIsOpen} />;
  },
};
