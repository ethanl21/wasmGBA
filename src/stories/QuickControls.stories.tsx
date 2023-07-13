import type { Meta, StoryObj } from "@storybook/react";

import QuickControls from "@/components/wasmgba/QuickControls";

const meta: Meta<typeof QuickControls> = {
  component: QuickControls,
  title: "Components/QuickControls",
  argTypes: {
    onPausedChanged: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
    onMutedChanged: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
    onVolumeChanged: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
    volume: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    paused: false,
    muted: false,
    volume: 100,
  },
};

export default meta;

type Story = StoryObj<typeof QuickControls>;
export const Default: Story = {
  render: ({
    paused,
    onPausedChanged,
    volume,
    muted,
    onMutedChanged,
    onVolumeChanged,
  }) => {
    return (
      <div className="fixed bottom-0 left-0 m-5 w-1/3">
        <QuickControls
          paused={paused}
          onPausedChanged={onPausedChanged}
          volume={volume}
          onVolumeChanged={onVolumeChanged}
          muted={muted}
          onMutedChanged={onMutedChanged}
        />
      </div>
    );
  },
};
