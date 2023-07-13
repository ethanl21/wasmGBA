import type { Meta, StoryObj } from "@storybook/react";

import QuickControls from "@/components/wasmgba/quickcontrols";

const meta: Meta<typeof QuickControls> = {
  component: QuickControls,
};

export default meta;
type Story = StoryObj<typeof QuickControls>;

export const Default: Story = {
  args: {
    paused: false,
    muted: false,
    volume: 100,
  },
  argTypes: {
    volume: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div className="fixed bottom-0 left-0 m-5 w-1/3">
        <Story />
      </div>
    ),
  ],
};
