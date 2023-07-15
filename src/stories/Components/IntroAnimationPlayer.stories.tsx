import type { Meta, StoryObj } from "@storybook/react";
import IntroAnimationPlayer from "@/components/wasmgba/IntroAnimationPlayer";

const meta: Meta<typeof IntroAnimationPlayer> = {
  component: IntroAnimationPlayer,
  argTypes: {
    onVideoEnded: {
      action: "videoEnded",
      table: {
        disable: true,
      },
    },
    volumePercentage: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
  args: {
    onVideoEnded: () => {},
    volumePercentage: 1,
    isPlaying: false,
    muted: navigator.userAgent.includes("Safari"),
  },
  decorators: [
    (Story) => (
      <>
      <div className="flex justify-center items-center flex-col">
        <span className="flex border-2">
        <Story />
        </span>
      
      {navigator.userAgent.includes("Safari") && <p>videos with audio will not autoplay on Safari</p>}
      </div>
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof IntroAnimationPlayer>;
export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <>
          <IntroAnimationPlayer
            isPlaying={args.isPlaying}
            onVideoEnded={args.onVideoEnded}
            volumePercentage={args.volumePercentage}
            muted={args.muted}
          />
      </>
    );
  },
};
