import type { Meta, StoryObj } from "@storybook/react";

import TopMenuBar from "@/components/wasmgba/topmenubar";

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
  },
};

export default meta;
type Story = StoryObj<typeof TopMenuBar>;

export const Default: Story = {
  args: {
    onOpenAboutDialog: () => {
      alert("The AboutDialog would be shown here.");
    },
    onOpenUsageDialog: () => {
      alert("The UsageDialog would be shown here.");
    },
    version: WASMGBA_VERSION,
    repo: "https://example.com",
    licenses: "https://example.com",
    muted: false,
    paused: false,
    fastForward: false,
    pixelated: false,
    volume: 100,
  },
  argTypes: {
    volume: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div className="fixed top-0 left-0 m-5">
        <Story />
      </div>
    ),
  ],
};
