import type { Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import TopMenuBar from "@/components/wasmgba/TopMenubar";

const meta: Meta<typeof TopMenuBar> = {
  component: TopMenuBar,
  tags: ["autodocs"],
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

export const Default = ({ ...args }) => {
  const [
    { paused, volume, muted, fastForward, pixelated, repo, licenses },
    updateArgs,
  ] = useArgs();

  return (
    <div className="flex">
      <TopMenuBar
        {...args}
        paused={paused as boolean}
        onPausedChange={(paused) => {
          updateArgs({ paused });
        }}
        volume={volume as number}
        onVolumeChange={(volume) => {
          updateArgs({ volume });
        }}
        muted={muted as boolean}
        onMutedChange={(muted) => {
          updateArgs({ muted });
        }}
        fastForward={fastForward as boolean}
        onFastForwardChange={(fastForward) => {
          updateArgs({ fastForward });
        }}
        pixelated={pixelated as boolean}
        onPixelatedChange={(pixelated) => {
          updateArgs({ pixelated });
        }}
        onOpenAboutDialog={() => {
          alert("The AboutDialog would be shown here.");
        }}
        onOpenUsageDialog={() => {
          alert("The UsageDialog would be shown here.");
        }}
        version=""
        repo={repo as string}
        licenses={licenses as string}
        upstream=""
      />
    </div>
  );
};
