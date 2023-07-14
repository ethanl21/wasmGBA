import type { Meta, StoryObj } from "@storybook/react";

import IntroAnimationPlayer from "@/components/wasmgba/IntroAnimationPlayer";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof IntroAnimationPlayer> = {
  component: IntroAnimationPlayer,
  argTypes: {
    onVideoEnded: {
      action: "videoEnded",
      table: {
        disable: true,
      },
    },
  },
  args: {
    onVideoEnded: () => {},
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col justify-center items-center space-y-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof IntroAnimationPlayer>;
export const Default: Story = {
  render: ({ ...args }) => {
    const playerRef = useRef<HTMLVideoElement | null>(null);

    return (
      <>
      <span onClick={() => playerRef.current?.play()}
      className="border-2">
        <IntroAnimationPlayer
          ref={playerRef}
          onVideoEnded={args.onVideoEnded}
        />
        </span>
        {/* <Button onClick={() => playerRef.current?.play()}>Play</Button> */}
      </>
    );
  },
};
