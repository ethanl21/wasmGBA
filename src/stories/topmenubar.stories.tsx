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
    version: {
      table: {
        disable: true,
      },
    },
    upstream: {
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
    version: "",
    repo: "https://example.com",
    licenses: "https://example.com",
    upstream: "",
  },
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
    //upstream,
    onPausedChange,
    onVolumeChange,
    onMutedChange,
    onFastForwardChange,
    onPixelatedChange,
    onOpenAboutDialog,
    onOpenUsageDialog,
  }) => {
    return (
      <div className="flex">
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
          version=""
          repo={repo}
          licenses={licenses}
          upstream=""
        />
      </div>
    );
  },
};
