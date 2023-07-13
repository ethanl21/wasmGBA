import type { Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import QuickControls from "@/components/wasmgba/QuickControls";

const meta: Meta<typeof QuickControls> = {
  component: QuickControls,
  tags: ["autodocs"],
  argTypes: {
    onPausedChanged: {
      action: "onPausedChanged",
      table: {
        disable: true,
      },
    },
    onMutedChanged: {
      action: "onMutedChanged",
      table: {
        disable: true,
      },
    },
    onVolumeChanged: {
      action: "onVolumeChanged",
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

export const Default = ({ ...args }) => {
  const [{ paused, volume, muted }, updateArgs] = useArgs();

  return (
    <div className="fixed bottom-0 left-0 m-5 w-1/3">
      <QuickControls
        {...args}
        paused={paused as boolean}
        onPausedChanged={(paused) => {
          updateArgs({ paused });
        }}
        volume={volume as number}
        onVolumeChanged={(volume) => {
          updateArgs({ volume });
        }}
        muted={muted as boolean}
        onMutedChanged={(muted) => {
          updateArgs({ muted });
        }}
      />
    </div>
  );
};
