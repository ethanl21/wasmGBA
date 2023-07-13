import type { Meta, StoryObj } from "@storybook/react";

import AboutDialog from "@/components/wasmgba/aboutdialog";

const meta: Meta<typeof AboutDialog> = {
  component: AboutDialog,
};

export default meta;
type Story = StoryObj<typeof AboutDialog>;

export const Default: Story = {
  args: {
    open: false,
    //setIsOpen: () => {},
    upstreamRepo:
      "https://github.com/GIT_AUTHOR/GIT_REPO/tree/0123456789012345678901234567890123456789",
    repo: "https://example.com",
  },
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};
