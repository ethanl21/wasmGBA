import type { Meta, StoryObj } from "@storybook/react";

import UsageDialog from "@/components/wasmgba/usagedialog";

const meta: Meta<typeof UsageDialog> = {
  component: UsageDialog,
};

export default meta;
type Story = StoryObj<typeof UsageDialog>;

export const Default: Story = {
  args: {
    open: false,
  },
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};
