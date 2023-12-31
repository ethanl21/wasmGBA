import type { Meta, StoryObj } from "@storybook/react";

import TopMenuBar from "@/components/wasmgba/TopMenubar";

const meta: Meta<typeof TopMenuBar> = {
  component: TopMenuBar,
  argTypes: {
    onOpenAboutDialog: {
      action: "openAboutDialog",
      table: {
        disable: true,
      },
    },
    onOpenUsageDialog: {
      action: "openUsageDialog",
      table: {
        disable: true,
      },
    },
    onOpenCheatsDialog: {
      action: "openCheatsDialog",
      table: {
        disable: true,
      },
    },
    onFastForwardChange: {
      action: "fastForwardChange",
      table: {
        disable: true,
      },
    },
    onMutedChange: {
      action: "mutedChange",
      table: {
        disable: true,
      },
    },
    onPausedChange: {
      action: "pausedChange",
      table: {
        disable: true,
      },
    },
    onPixelatedChange: {
      action: "pixelatedChange",
      table: {
        disable: true,
      },
    },
    onVolumeChange: {
      action: "volumeChange",
      table: {
        disable: true,
      },
    },
  },
  args: {
    paused: false,
    volume: 100,
    muted: false,
    fastForward: false,
    pixelated: false,
    repo: "https://example.com",
    licenses: "https://example.com",
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

type Story = StoryObj<typeof TopMenuBar>;
export const Default: Story = {
  render: ({
    paused,
    volume,
    muted,
    fastForward,
    pixelated,
    repo,
    licenses,
    onPausedChange,
    onVolumeChange,
    onMutedChange,
    onFastForwardChange,
    onPixelatedChange,
    onOpenAboutDialog,
    onOpenUsageDialog,
    onOpenCheatsDialog,
  }) => {
    return (
      <TopMenuBar
        paused={paused}
        onPausedChange={onPausedChange}
        volume={volume}
        onVolumeChange={onVolumeChange}
        muted={muted}
        onMutedChange={onMutedChange}
        fastForward={fastForward}
        onFastForwardChange={onFastForwardChange}
        pixelated={pixelated}
        onPixelatedChange={onPixelatedChange}
        onOpenAboutDialog={onOpenAboutDialog}
        onOpenUsageDialog={onOpenUsageDialog}
        onOpenCheatsDialog={onOpenCheatsDialog}
        repo={repo}
        licenses={licenses}
      />
    );
  },
};
